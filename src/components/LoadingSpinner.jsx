import React from "react";

export default function LoadingSpinner() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-6">
        {/* Spinner */}
        <div className="relative">
          {/* Outer ring */}
          <div className="w-20 h-20 border-4 border-gray-200 rounded-full"></div>
          
          {/* Spinning ring */}
          <div className="absolute top-0 left-0 w-20 h-20 border-4 border-green-600 rounded-full border-t-transparent animate-spin"></div>
          
          {/* Inner pulse */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-green-600 rounded-full animate-pulse opacity-20"></div>
        </div>

        {/* Loading text */}
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-2xl font-bold text-gray-800">Loading</h2>
          <div className="flex gap-1">
            <span className="w-2 h-2 bg-green-600 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></span>
            <span className="w-2 h-2 bg-green-600 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
            <span className="w-2 h-2 bg-green-600 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
          </div>
        </div>
      </div>
    </div>
  );
}
