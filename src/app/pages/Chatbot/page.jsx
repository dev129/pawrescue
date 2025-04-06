// app/page.js
'use client'

import { useEffect, useState } from 'react';
import ChatbotAssistant from '../../../components/ui/ChatbotAssistant';
import { Loader2 } from 'lucide-react';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [apiStatus, setApiStatus] = useState({ ready: false, message: 'Initializing API...' });

  // Check API connectivity on load
  useEffect(() => {
    const checkApiStatus = async () => {
      try {
        // Simple API health check
        const response = await fetch('/api/health', {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' }
        });
        
        if (response.ok) {
          setApiStatus({ ready: true, message: 'API ready' });
        } else {
          setApiStatus({ ready: false, message: 'API service unavailable' });
        }
      } catch (error) {
        setApiStatus({ ready: false, message: 'Unable to connect to API services' });
        console.error('API health check failed:', error);
      } finally {
        setIsLoading(false);
      }
    };

    checkApiStatus();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-rose-50">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin text-rose-500 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-rose-700">Loading Rescue Assistant...</h2>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen">
      {!apiStatus.ready ? (
        <div className="flex items-center justify-center h-screen bg-rose-50">
          <div className="max-w-md p-6 bg-white rounded-lg shadow-lg border border-rose-200">
            <h2 className="text-xl font-semibold text-rose-700 mb-2">API Connection Issue</h2>
            <p className="text-gray-700 mb-4">{apiStatus.message}</p>
            <p className="text-gray-600 text-sm">Please try refreshing the page or contact support if the issue persists.</p>
          </div>
        </div>
      ) : (
        <ChatbotAssistant />
      )}
    </main>
  );
}