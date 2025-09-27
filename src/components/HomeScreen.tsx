import { Camera, Image as ImageIcon, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import appIcon from '@/assets/app-icon.png';

interface HomeScreenProps {
  onCaptureImage: () => void;
}

const HomeScreen = ({ onCaptureImage }: HomeScreenProps) => {
  return (
    <div className="min-h-screen bg-background p-4">
      {/* Header */}
      <div className="flex items-center justify-center mb-8 pt-4">
        <img 
          src={appIcon} 
          alt="BreedVision" 
          className="w-16 h-16 rounded-full shadow-card mr-4"
        />
        <div>
          <h1 className="text-2xl font-bold text-foreground mobile-field-worker">
            BreedVision
          </h1>
          <p className="text-muted-foreground text-sm">
            Animal Breed Detection
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-md mx-auto space-y-6">
        {/* Info Card */}
        <Card className="shadow-card">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Info className="w-5 h-5 text-primary" />
              Instructions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-sm text-muted-foreground leading-relaxed">
              • Point camera at cow or buffalo
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              • Ensure good lighting conditions
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              • Keep animal in center of frame
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              • Data will sync with BPA automatically
            </p>
          </CardContent>
        </Card>

        {/* Main Capture Button */}
        <div className="text-center py-8">
          <Button
            variant="capture"
            size="capture"
            onClick={onCaptureImage}
            className="w-full max-w-xs mx-auto flex flex-col gap-3"
          >
            <Camera className="w-8 h-8" />
            <span>Capture Animal Image</span>
          </Button>
        </div>

        {/* Alternative Options */}
        <div className="grid grid-cols-2 gap-4 mt-8">
          <Button
            variant="outline"
            size="mobile"
            onClick={onCaptureImage}
            className="flex flex-col gap-2"
          >
            <ImageIcon className="w-5 h-5" />
            <span className="text-sm">From Gallery</span>
          </Button>
          
          <Button
            variant="secondary"
            size="mobile"
            disabled
            className="flex flex-col gap-2 opacity-50"
          >
            <Info className="w-5 h-5" />
            <span className="text-sm">View History</span>
          </Button>
        </div>

        {/* Status Footer */}
        <div className="text-center mt-12 pt-4 border-t border-border">
          <p className="text-xs text-muted-foreground">
            BPA Connection: <span className="text-success font-medium">Active</span>
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Location: Bhopal, Madhya Pradesh
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;