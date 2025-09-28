export const captureImage = async (): Promise<string | null> => {
  try {
    // Try to access camera/photo library via file input for web
    return await openImagePicker();
  } catch (error) {
    console.error('Error capturing image:', error);
    
    // Fallback to placeholder for demo purposes
    return generatePlaceholderImage();
  }
};

// Web-based image picker using HTML5 File API
const openImagePicker = (): Promise<string | null> => {
  return new Promise((resolve) => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.capture = 'environment'; // This will open camera on mobile browsers
    
    input.onchange = (event) => {
      const file = (event.target as HTMLInputElement).files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          resolve(e.target?.result as string);
        };
        reader.onerror = () => {
          resolve(null);
        };
        reader.readAsDataURL(file);
      } else {
        resolve(null);
      }
    };
    
    input.oncancel = () => {
      resolve(null);
    };
    
    // Trigger the file picker
    input.click();
  });
};

// Generate a placeholder image for web demo
const generatePlaceholderImage = (): string => {
  const canvas = document.createElement('canvas');
  canvas.width = 400;
  canvas.height = 300;
  const ctx = canvas.getContext('2d');
  
  if (ctx) {
    // Create a gradient background
    const gradient = ctx.createLinearGradient(0, 0, 400, 300);
    gradient.addColorStop(0, '#FF9933');
    gradient.addColorStop(1, '#138808');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 400, 300);
    
    // Add text
    ctx.fillStyle = 'white';
    ctx.font = 'bold 24px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Demo Cow Image', 200, 120);
    
    ctx.font = '16px Arial';
    ctx.fillText('(Gyr Cattle)', 200, 150);
    
    ctx.font = '12px Arial';
    ctx.fillText('Captured via BreedVision', 200, 180);
  }
  
  return canvas.toDataURL();
};