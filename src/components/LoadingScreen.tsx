import React, { useState, useEffect } from 'react';
import Loader from './Loader';

interface LoadingScreenProps {
  onLoadingComplete?: () => void;
  duration?: number;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ 
  onLoadingComplete, 
  duration = 3000 
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + (100 / (duration / 100));
      });
    }, 100);

    // Hide loading screen after duration
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onLoadingComplete) {
        onLoadingComplete();
      }
    }, duration);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(timer);
    };
  }, [duration, onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-white via-blue-50 to-gray-50 z-50 flex flex-col items-center justify-center">
      {/* Company Branding */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
            AISCO
          </span>
        </h1>
        <p className="text-gray-600 text-lg">AISCO – Angola Iron and Steel Corporation, LDA</p>
        <p className="text-gray-500 text-sm mt-1">Building for Generations</p>
      </div>

      {/* Main Loader */}
      <Loader 
        size="large" 
        message="Initializing Steel Manufacturing Excellence..."
      />

      {/* Progress Information */}
      <div className="mt-8 text-center max-w-md">
        <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
          <div 
            className="bg-gradient-to-r from-blue-500 to-orange-500 h-2 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-gray-600 text-sm">
          {progress < 30 && "Loading manufacturing data..."}
          {progress >= 30 && progress < 60 && "Preparing quality systems..."}
          {progress >= 60 && progress < 90 && "Initializing product catalog..."}
          {progress >= 90 && "Almost ready..."}
        </p>
      </div>

      {/* Steel-themed decorative elements */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
        <div className="flex items-center space-x-4 text-gray-400 text-sm">
          <span>🏭 Advanced Capacity</span>
          <span>•</span>
          <span>🏆 International Standards</span>
          <span>•</span>
          <span>🇦🇴 Made in Angola</span>
        </div>
      </div>

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>
    </div>
  );
};

export default LoadingScreen;