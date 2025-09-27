import { useEffect, useState } from 'react';
import breedVisionLogo from '@/assets/breedvision-logo.png';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(onComplete, 500); // Additional delay for smooth transition
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-hero flex flex-col items-center justify-center z-50">
      {/* Logo Container */}
      <div className="mb-8 animate-pulse">
        <img 
          src={breedVisionLogo} 
          alt="BreedVision Logo" 
          className="w-48 h-28 object-contain filter drop-shadow-lg"
        />
      </div>

      {/* App Title */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-white mb-2 mobile-field-worker">
          BreedVision
        </h1>
        <p className="text-xl text-white/90 font-medium">
          Prototype
        </p>
        <p className="text-sm text-white/70 mt-2">
          AI-Powered Animal Breed Detection
        </p>
      </div>

      {/* Loading Animation */}
      <div className="flex flex-col items-center">
        <div className="flex space-x-2 mb-4">
          <div className="w-3 h-3 bg-white rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="w-3 h-3 bg-white rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="w-3 h-3 bg-white rounded-full animate-bounce"></div>
        </div>
        <p className="text-white/80 text-sm font-medium">
          {isLoading ? 'Initializing...' : 'Ready!'}
        </p>
      </div>

      {/* Footer */}
      <div className="absolute bottom-8 text-center">
        <p className="text-white/60 text-xs">
          Powered by AI • Made in India
        </p>
      </div>
    </div>
  );
};

export default SplashScreen;