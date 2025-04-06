// app/api/gemini/route.js
import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from 'next/server';

// Initialize the Google Generative AI client
const API_KEY = process.env.GEMINI_API_KEY || "AIzaSyB9Cmc3JabsOYJhLaBRwSTCz4RxjY3xTyA"; // Replace with your key in production
const genAI = new GoogleGenerativeAI(API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { prompt, temperature = 0.7, maxOutputTokens = 1024 } = body;

    // Check if the request contains text and/or image
    if (!prompt || !prompt.text) {
      return NextResponse.json(
        { error: "Invalid request: Missing prompt text" },
        { status: 400 }
      );
    }

    // Determine if we need to use multimodal capabilities
    const hasImageData = prompt.text.includes("Image Data (Base64)");
    
    let model;
    let result;

    if (hasImageData) {
      // Use multimodal model for image + text
      model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });
      
      // Extract the base64 image data
      const textParts = prompt.text.split("Image Data (Base64):\n");
      const userText = textParts[0];
      const imageData = textParts[1];
      
      // Create parts with text and image
      const imagePart = {
        inlineData: {
          data: imageData,
          mimeType: "image/jpeg", // Adjust based on your image type
        },
      };
      
      // Generate content with both text and image
      result = await model.generateContent([userText, imagePart], {
        temperature,
        maxOutputTokens,
      });
    } else {
      // Use text-only model for text prompts
      model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      
      // Generate content with text only
      result = await model.generateContent(prompt.text, {
        temperature,
        maxOutputTokens,
      });
    }

    // Format response to match expected structure in the component
    const response = {
      candidates: [
        {
          output: result.response.text(),
        },
      ],
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error("Gemini API Error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to process request" },
      { status: 500 }
    );
  }
}