// Function to handle visibility change
'use client'
import { useEffect } from "react";
export function TabChange() {
    useEffect(() => {
      // Ensure we only run this on the client-side
      if (typeof document === 'undefined') return;
  
      const defaultTitle = "Welcome to Paw Rescue";
      const tabSwitchTitle = "Thank you for visiting!";
  
      // Set the initial title when the page loads
      document.title = defaultTitle;
  
      // Handle visibility change
      const handleVisibilityChange = () => {
        if (document.hidden) {
          // When the tab is in the background
          document.title = tabSwitchTitle;
        } else {
          // When the tab becomes active again
          document.title = defaultTitle;
        }
      };
  
      // Add event listener for visibility change
      document.addEventListener('visibilitychange', handleVisibilityChange);
  
      // Cleanup function to remove the event listener when the component unmounts
      return () => {
        document.removeEventListener('visibilitychange', handleVisibilityChange);
      };
    }, []);
  }
  