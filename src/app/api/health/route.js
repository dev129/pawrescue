// app/api/health/route.js
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // You could add more sophisticated health checks here
    // For example, testing database connectivity or external API status
    return NextResponse.json(
      { 
        status: "healthy",
        timestamp: new Date().toISOString(),
        service: "gemini-api-gateway" 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Health check failed:", error);
    return NextResponse.json(
      { 
        status: "unhealthy",
        error: error.message,
        timestamp: new Date().toISOString() 
      },
      { status: 500 }
    );
  }
}