import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SplashScreen from "./components/SplashScreen";
import HomeScreen from "./components/HomeScreen";
import AIResultScreen from "./components/AIResultScreen";
import { captureImage } from "./services/cameraService";
import { useToast } from "@/hooks/use-toast";

const queryClient = new QueryClient();

type AppScreen = 'splash' | 'home' | 'result';

const App = () => {
  const [currentScreen, setCurrentScreen] = useState<AppScreen>('splash');
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const { toast } = useToast();

  const handleSplashComplete = () => {
    setCurrentScreen('home');
  };

  const handleCaptureImage = async () => {
    try {
      toast({
        title: "Opening Camera",
        description: "Please allow camera permissions if prompted.",
      });

      const imageData = await captureImage();
      
      if (imageData) {
        setCapturedImage(imageData);
        setCurrentScreen('result');
        toast({
          title: "Image Captured Successfully",
          description: "Processing with AI...",
        });
      } else {
        toast({
          title: "Camera Error",
          description: "Failed to capture image. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Error capturing image:', error);
      toast({
        title: "Camera Error",
        description: "Failed to access camera. Please check permissions.",
        variant: "destructive",
      });
    }
  };

  const handleBack = () => {
    setCurrentScreen('home');
    setCapturedImage(null);
  };

  const renderCurrentScreen = () => {
    switch (currentScreen) {
      case 'splash':
        return <SplashScreen onComplete={handleSplashComplete} />;
      case 'home':
        return <HomeScreen onCaptureImage={handleCaptureImage} />;
      case 'result':
        return <AIResultScreen capturedImage={capturedImage} onBack={handleBack} />;
      default:
        return <HomeScreen onCaptureImage={handleCaptureImage} />;
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <div className="min-h-screen bg-background text-foreground">
          {renderCurrentScreen()}
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
