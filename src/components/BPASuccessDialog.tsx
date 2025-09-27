import { CheckCircle, MapPin, Tag } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface BPASuccessDialogProps {
  isOpen: boolean;
  onClose: () => void;
  breed: string;
  location: string;
}

const BPASuccessDialog = ({ isOpen, onClose, breed, location }: BPASuccessDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md mx-4">
        <DialogHeader className="text-center">
          <div className="mx-auto mb-4 w-16 h-16 bg-success/10 rounded-full flex items-center justify-center">
            <CheckCircle className="w-8 h-8 text-success" />
          </div>
          <DialogTitle className="text-xl font-bold mobile-field-worker">
            BPA Update Successful
          </DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground mt-2">
            Animal breed data has been successfully synchronized with the Breed and Phenotype Analysis system.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          {/* Breed Information */}
          <div className="bg-success/5 p-4 rounded-mobile border border-success/20">
            <div className="flex items-center gap-2 mb-2">
              <Tag className="w-4 h-4 text-success" />
              <span className="font-semibold text-sm">Detected Breed</span>
            </div>
            <p className="text-lg font-bold text-success">{breed}</p>
          </div>

          {/* Location Information */}
          <div className="bg-primary/5 p-4 rounded-mobile border border-primary/20">
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="font-semibold text-sm">Location</span>
            </div>
            <p className="text-sm text-primary font-medium">{location}</p>
          </div>

          {/* Status Badge */}
          <div className="text-center">
            <Badge className="bg-success text-success-foreground text-sm py-1 px-4">
              ✅ Synced with BPA
            </Badge>
          </div>

          {/* Additional Info */}
          <div className="text-center bg-muted/50 p-3 rounded-mobile">
            <p className="text-xs text-muted-foreground">
              Reference ID: BPA-{Date.now().toString().slice(-6)}
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Timestamp: {new Date().toLocaleString('en-IN')}
            </p>
          </div>
        </div>

        <DialogFooter>
          <Button 
            onClick={onClose} 
            variant="success" 
            size="mobile"
            className="w-full"
          >
            OK
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default BPASuccessDialog;