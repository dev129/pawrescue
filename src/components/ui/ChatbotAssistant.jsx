
'use client'
import React, { useState, useRef, useEffect } from 'react';
import { Send, Loader2, Camera, Heart, MapPin, DollarSign, ExternalLink, X, PawPrint } from 'lucide-react';

const ChatbotAssistant = () => {
  const [messages, setMessages] = useState([
    { id: 1, type: 'bot', content: 'Hello! I\'m your Pet Rescue Assistant. Please share a photo and describe the injured animal you\'ve found, and I\'ll help you immediately.', timestamp: new Date() }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [uploadedImage, setUploadedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [chatStage, setChatStage] = useState('initial');
  const [apiError, setApiError] = useState(null);
  const fileInputRef = useRef(null);
  const messagesEndRef = useRef(null);

  const ADOPTION_URL = '/pages/adoption';
  const DONATION_URL = '/pages/donation';

  // API configuration
  const API_CONFIG = {
    endpoint: "/api/gemini", // Our Next.js API route
    timeout: 30000, // 30 seconds
    maxRetries: 2,
    retryDelay: 1000,
  };

  useEffect(() => { 
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' }); 
  }, [messages]);

  // Clear any API errors when user interacts with the form
  useEffect(() => {
    if (apiError && (inputMessage || uploadedImage)) {
      setApiError(null);
    }
  }, [inputMessage, uploadedImage, apiError]);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) { 
        alert("File is too large. Maximum size is 5MB."); 
        return; 
      }
      const reader = new FileReader();
      reader.onloadend = () => { 
        setUploadedImage(reader.result); 
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageUpload = () => { 
    fileInputRef.current.click(); 
  };
  
  const removeUploadedImage = () => { 
    setUploadedImage(null); 
  };
  
  const navigateToExternalPage = (url) => { 
    window.open(url, '_blank'); 
  };

  // Helper function to delay execution (for retries)
  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  // API call with timeout and retry logic
  const callAPI = async (body, retries = API_CONFIG.maxRetries) => {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), API_CONFIG.timeout);
      
      const response = await fetch(API_CONFIG.endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
        signal: controller.signal
      });
      
      clearTimeout(timeoutId);
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error("API Error:", response.status, errorData);
        throw new Error(errorData.error || `API Error: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      if (error.name === 'AbortError') {
        throw new Error("Request timed out. Please try again.");
      }
      
      if (retries > 0) {
        console.log(`Retrying API call. Attempts remaining: ${retries}`);
        await delay(API_CONFIG.retryDelay);
        return callAPI(body, retries - 1);
      }
      
      throw error;
    }
  };

  const processWithGemini = async (userMessage, userImage) => {
    try {
      setIsLoading(true);
      setApiError(null);
      
      const imageData = userImage ? userImage.split(',')[1] : null;
      const requestBody = {
        prompt: {
          text: `You are a veterinary assistant. Provide first aid advice for the following animal. User Description: ${userMessage}${imageData ? "\n\nImage Data (Base64):\n" + imageData : ""}`,
        },
        temperature: 0.2,
        maxOutputTokens: 1024,
      };

      const data = await callAPI(requestBody);

      if (data.candidates && data.candidates.length > 0) {
        return data.candidates[0].output;
      } else {
        throw new Error("No response data from Gemini API");
      }
    } catch (error) {
      console.error("Error processing with Gemini:", error);
      setApiError(error.message);
      return `I apologize, but I encountered an error: ${error.message}. Please try again.`;
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim() && !uploadedImage) return;
    
    const userMessage = { 
      id: Date.now(), 
      type: 'user', 
      content: inputMessage, 
      image: uploadedImage, 
      timestamp: new Date() 
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setUploadedImage(null);
    
    if (chatStage === 'initial') {
      const aiResponse = await processWithGemini(inputMessage, uploadedImage);
      const botMessage = { 
        id: Date.now() + 1, 
        type: 'bot', 
        content: aiResponse, 
        options: ['Yes, I need a rescue center', 'No, the remedy is enough'], 
        timestamp: new Date() 
      };
      setMessages(prev => [...prev, botMessage]);
      setChatStage('remedy');
    } else if (chatStage === 'remedy' || chatStage === 'location') {
      setIsLoading(true);
      setTimeout(() => {
        let botMessage;
        if (inputMessage.toLowerCase().includes('yes')) {
          botMessage = { 
            id: Date.now() + 1, 
            type: 'bot', 
            content: "Here's the nearest animal rescue center:\nRescue Dogs\nHouse No. 7101, 1, Street Number 14\nNew Janta Nagar, Nominee\nLudhiana, Punjab 141003\nOpen 24/7\n(555) 987-6543\nWould you like to learn more about how you can help?", 
            options: ['Adopt a pet', 'Make a donation'], 
            actions: ['adopt', 'donate'], 
            timestamp: new Date() 
          };
          setChatStage('location');
        } else {
          botMessage = { 
            id: Date.now() + 1, 
            type: 'bot', 
            content: 'Thank you! Would you like to learn more about how you can help?', 
            options: ['Adopt a pet', 'Make a donation'], 
            actions: ['adopt', 'donate'], 
            timestamp: new Date() 
          };
          setChatStage('thankyou');
        }
        setMessages(prev => [...prev, botMessage]);
        setIsLoading(false);
      }, 1000);
    } else if (chatStage === 'thankyou') {
      setIsLoading(true);
      setTimeout(() => {
        let botMessage;
        if (inputMessage.toLowerCase().includes('adopt')) {
          botMessage = { 
            id: Date.now() + 1, 
            type: 'bot', 
            content: 'That\'s wonderful! You\'ll be redirected to our adoption page.', 
            externalLink: { 
              text: 'Go to Adoption Page', 
              url: ADOPTION_URL 
            }, 
            timestamp: new Date() 
          };
          setTimeout(() => { navigateToExternalPage(ADOPTION_URL); }, 2000);
        } else {
          botMessage = { 
            id: Date.now() + 1, 
            type: 'bot', 
            content: 'Your generosity makes our work possible! You\'ll be redirected to our donation page.', 
            externalLink: { 
              text: 'Go to Donation Page', 
              url: DONATION_URL 
            }, 
            timestamp: new Date() 
          };
          setTimeout(() => { navigateToExternalPage(DONATION_URL); }, 2000);
        }
        setMessages(prev => [...prev, botMessage]);
        setIsLoading(false);
        setChatStage('final');
      }, 1000);
    }
  };

  const handleOptionClick = (option, action) => {
    const userMessage = { 
      id: Date.now(), 
      type: 'user', 
      content: option, 
      timestamp: new Date() 
    };
    
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    
    setTimeout(() => {
      let botMessage;
      if (chatStage === 'remedy') {
        if (option.includes('Yes')) {
          botMessage = { 
            id: Date.now() + 1, 
            type: 'bot', 
            content: "Here's the nearest animal rescue center:\nRescue Dogs\nHouse No. 7101, 1, Street Number 14\nNew Janta Nagar, Nominee\nLudhiana, Punjab 141003\nOpen 24/7\n(555) 987-6543\nWould you like to learn more about how you can help?", 
            options: ['Adopt a pet', 'Make a donation'], 
            actions: ['adopt', 'donate'], 
            timestamp: new Date() 
          };
          setChatStage('location');
        } else {
          botMessage = { 
            id: Date.now() + 1, 
            type: 'bot', 
            content: 'Thank you! Would you like to learn more about how you can help?', 
            options: ['Adopt a pet', 'Make a donation'], 
            actions: ['adopt', 'donate'], 
            timestamp: new Date() 
          };
          setChatStage('thankyou');
        }
      } else if (chatStage === 'location' || chatStage === 'thankyou') {
        if (action === 'adopt') {
          botMessage = { 
            id: Date.now() + 1, 
            type: 'bot', 
            content: 'That\'s wonderful! You\'ll be redirected to our adoption page.', 
            externalLink: { 
              text: 'Go to Adoption Page', 
              url: ADOPTION_URL 
            }, 
            timestamp: new Date() 
          };
          setTimeout(() => { navigateToExternalPage(ADOPTION_URL); }, 2000);
        } else {
          botMessage = { 
            id: Date.now() + 1, 
            type: 'bot', 
            content: 'Your generosity makes our work possible! You\'ll be redirected to our donation page.', 
            externalLink: { 
              text: 'Go to Donation Page', 
              url: DONATION_URL 
            }, 
            timestamp: new Date() 
          };
          setTimeout(() => { navigateToExternalPage(DONATION_URL); }, 2000);
        }
        setChatStage('final');
      }
      setMessages(prev => [...prev, botMessage]);
      setIsLoading(false);
    }, 1000);
  };

  const handleStartNewChat = () => {
    setMessages([
      { 
        id: Date.now(), 
        type: 'bot', 
        content: 'Hello! I\'m your Pet Rescue Assistant. Please share a photo and describe the injured animal you\'ve found, and I\'ll help you immediately.', 
        timestamp: new Date() 
      }
    ]);
    setChatStage('initial');
    setApiError(null);
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-rose-50 to-pink-100">
      <div className="bg-gradient-to-r from-rose-500 to-pink-500 p-4 text-white shadow-md">
        <div className="flex items-center">
          <PawPrint className="h-6 w-6 mr-2" />
          <div>
            <h2 className="text-lg font-semibold">Paws & Hearts Rescue Assistant</h2>
            <p className="text-sm opacity-90">24/7 Emergency Pet Support</p>
          </div>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {apiError && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <strong className="font-bold">API Error: </strong>
            <span className="block sm:inline">{apiError}</span>
          </div>
        )}
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-lg p-3 ${message.type === 'user' ? 'bg-rose-500 text-white rounded-br-none shadow-md' : 'bg-white text-gray-800 rounded-bl-none shadow-md border border-rose-100'}`}>
              {message.image && (
                <div className="mb-2">
                  <img src={message.image} alt="Uploaded" className="rounded-lg max-h-48 w-auto" />
                </div>
              )}
              <p className="text-sm whitespace-pre-line">{message.content}</p>
              <span className="text-xs opacity-70 mt-1 block">
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
              {message.options && (
                <div className="mt-3 flex flex-col space-y-2">
                  {message.options.map((option, index) => (
                    <button 
                      key={index} 
                      onClick={() => handleOptionClick(option, message.actions ? message.actions[index] : null)} 
                      className="bg-white text-rose-500 border border-rose-300 rounded-lg p-2 text-sm hover:bg-rose-50 transition-colors text-left flex items-center gap-2"
                    >
                      {option.includes('rescue') && <MapPin className="w-4 h-4" />}
                      {option.includes('Adopt') && <Heart className="w-4 h-4" />}
                      {option.includes('donation') && <DollarSign className="w-4 h-4" />}
                      {option}
                    </button>
                  ))}
                </div>
              )}
              {message.externalLink && (
                <div className="mt-3">
                  <button 
                    onClick={() => navigateToExternalPage(message.externalLink.url)} 
                    className="bg-rose-500 text-white border border-rose-400 rounded-lg p-2 text-sm hover:bg-rose-600 transition-colors flex items-center gap-2 w-full justify-center"
                  >
                    <ExternalLink className="w-4 h-4" />
                    {message.externalLink.text}
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white rounded-lg p-3 rounded-bl-none border border-rose-100 shadow-md">
              <Loader2 className="w-5 h-5 animate-spin text-rose-500" />
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={handleSendMessage} className="border-t border-rose-200 p-4 bg-white shadow-md">
        {uploadedImage && (
          <div className="mb-2 relative inline-block">
            <div className="relative h-16 w-16 rounded-lg overflow-hidden border border-gray-300">
              <img src={uploadedImage} alt="Preview" className="h-full w-full object-cover" />
              <button 
                type="button" 
                onClick={removeUploadedImage} 
                className="absolute top-0 right-0 bg-gray-800 bg-opacity-70 rounded-full p-1 text-white"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          </div>
        )}
        <div className="flex items-center gap-2">
          <input 
            type="text" 
            value={inputMessage} 
            onChange={(e) => setInputMessage(e.target.value)} 
            placeholder="Describe the injured animal..." 
            className="flex-1 p-3 border border-gray-300 rounded-lg text-black focus:outline-none focus:border-rose-500" 
            disabled={chatStage === 'final'} 
          />
          <input 
            type="file" 
            ref={fileInputRef} 
            className="hidden" 
            accept="image/*" 
            onChange={handleImageChange} 
          />
          {chatStage === 'final' ? (
            <button 
              type="button" 
              onClick={handleStartNewChat} 
              className="bg-rose-500 text-white p-3 rounded-lg hover:bg-rose-600 transition-colors"
            >
              New Chat
            </button>
          ) : (
            <>
              <button 
                type="button" 
                onClick={handleImageUpload} 
                className="bg-rose-100 text-rose-500 p-3 rounded-lg hover:bg-rose-200 transition-colors" 
                disabled={chatStage === 'final'}
              >
                <Camera className="w-5 h-5" />
              </button>
              <button 
                type="submit" 
                disabled={(!inputMessage.trim() && !uploadedImage) || chatStage === 'final'} 
                className="bg-rose-500 text-white p-3 rounded-lg hover:bg-rose-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send className="w-5 h-5" />
              </button>
            </>
          )}
        </div>
      </form>
    </div>
  );
};

export default ChatbotAssistant;