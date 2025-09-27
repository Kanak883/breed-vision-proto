import { useState } from 'react';
import { ArrowLeft, MapPin, CheckCircle, Camera, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import BPASuccessDialog from './BPASuccessDialog';

interface AIResultScreenProps {
  capturedImage: string | null;
  onBack: () => void;
}

const AIResultScreen = ({ capturedImage, onBack }: AIResultScreenProps) => {
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);

  // Hardcoded AI results for prototype
  const detectionResult = {
    breed: "Gyr Cattle",
    confidence: 94,
    location: "Bhopal, Madhya Pradesh, India",
    timestamp: new Date().toLocaleString('en-IN'),
    characteristics: [
      "Medium to large sized",
      "Distinctive hump",
      "Heat tolerant",
      "Good milk producer"
    ]
  };

  const handleBPASync = () => {
    setShowSuccessDialog(true);
  };

  const handleDialogClose = () => {
    setShowSuccessDialog(false);
    onBack();
  };

  return (
    <div className="min-h-screen bg-background p-4">
      {/* Header */}
      <div className="flex items-center mb-6 pt-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={onBack}
          className="mr-3"
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <h1 className="text-xl font-bold mobile-field-worker">
          Detection Results
        </h1>
      </div>

      <div className="max-w-md mx-auto space-y-6">
        {/* Captured Image */}
        <Card className="shadow-card">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Camera className="w-5 h-5 text-primary" />
              Captured Image
            </CardTitle>
          </CardHeader>
          <CardContent>
            {capturedImage ? (
              <img 
                src={capturedImage} 
                alt="Captured animal" 
                className="w-full h-48 object-cover rounded-mobile shadow-card"
              />
            ) : (
              <div className="w-full h-48 bg-muted rounded-mobile flex items-center justify-center">
                <p className="text-muted-foreground">No image captured</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* AI Detection Results */}
        <Card className="shadow-card border-l-4 border-l-primary">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center justify-between">
              <span className="text-lg">AI Detection</span>
              <Badge variant="secondary" className="bg-success/10 text-success">
                {detectionResult.confidence}% confident
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-2xl font-bold text-primary mobile-field-worker">
                {detectionResult.breed}
              </h3>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-semibold text-sm text-muted-foreground">
                Characteristics:
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {detectionResult.characteristics.map((char, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {char}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Location & Timestamp */}
        <Card className="shadow-card">
          <CardContent className="pt-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm font-medium">{detectionResult.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">{detectionResult.timestamp}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* BPA Status Card */}
        <Card className="shadow-success bg-success/5 border-success/20">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-success" />
                <div>
                  <h4 className="font-semibold text-success">Data updated to BPA</h4>
                  <p className="text-sm text-success/80">Sync successful</p>
                </div>
              </div>
              <Badge className="bg-success text-success-foreground">
                ✅ Synced
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-4 pt-4">
          <Button
            variant="success"
            size="mobile"
            onClick={handleBPASync}
            className="flex flex-col gap-2"
          >
            <CheckCircle className="w-5 h-5" />
            <span>View BPA Status</span>
          </Button>
          
          <Button
            variant="outline"
            size="mobile"
            onClick={onBack}
            className="flex flex-col gap-2"
          >
            <Camera className="w-5 h-5" />
            <span>Capture New</span>
          </Button>
        </div>
      </div>

      {/* BPA Success Dialog */}
      <BPASuccessDialog
        isOpen={showSuccessDialog}
        onClose={handleDialogClose}
        breed={detectionResult.breed}
        location={detectionResult.location}
      />
    </div>
  );
};

export default AIResultScreen;