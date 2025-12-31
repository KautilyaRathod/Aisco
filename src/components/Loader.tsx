import React from 'react';

interface LoaderProps {
  size?: 'small' | 'medium' | 'large';
  message?: string;
  fullScreen?: boolean;
}

const Loader: React.FC<LoaderProps> = ({ 
  size = 'medium', 
  message = 'Loading...', 
  fullScreen = false 
}) => {
  const sizeClasses = {
    small: 'w-12 h-12',
    medium: 'w-20 h-20',
    large: 'w-32 h-32'
  };

  const containerClasses = fullScreen 
    ? 'fixed inset-0 bg-white/95 backdrop-blur-sm z-50 flex flex-col items-center justify-center'
    : 'flex flex-col items-center justify-center p-8';

  return (
    <div className={containerClasses}>
      {/* Animated Background Circles */}
      <div className="relative">
        {/* Outer rotating ring */}
        <div className="absolute inset-0 animate-spin">
          <div className="w-24 h-24 border-4 border-transparent border-t-blue-500 border-r-blue-400 rounded-full"></div>
        </div>
        
        {/* Middle pulsing ring */}
        <div className="absolute inset-2 animate-pulse">
          <div className="w-20 h-20 border-2 border-blue-300 rounded-full opacity-60"></div>
        </div>
        
        {/* Inner counter-rotating ring */}
        <div className="absolute inset-3 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '3s' }}>
          <div className="w-18 h-18 border-2 border-transparent border-b-orange-400 border-l-orange-300 rounded-full"></div>
        </div>

        {/* AISCO Logo Container */}
        <div className={`relative ${sizeClasses[size]} flex items-center justify-center animate-pulse`}>
          <img
            src="/Angola Logo.png"
            alt="AISCO Loading"
            className="w-full h-full object-contain drop-shadow-lg"
            style={{
              filter: 'drop-shadow(0 4px 8px rgba(8, 144, 198, 0.3))'
            }}
          />
          
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-orange-400/20 rounded-full blur-xl animate-pulse"></div>
        </div>
      </div>

      {/* Loading Message */}
      {message && (
        <div className="mt-6 text-center">
          <p className="text-gray-700 font-medium text-lg mb-2">{message}</p>
          <div className="flex items-center justify-center space-x-1">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
      )}

      {/* Steel-themed progress bar */}
      <div className="mt-4 w-48 h-1 bg-gray-200 rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-blue-500 via-orange-400 to-blue-600 rounded-full animate-pulse"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/60 rounded-full animate-pulse"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Loader;