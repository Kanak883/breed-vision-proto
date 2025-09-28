export const captureImage = async (): Promise<string | null> => {
  try {
    // For web demo - return a placeholder image
    if (typeof window !== 'undefined') {
      return generatePlaceholderImage();
    }
    
    return null;
  } catch (error) {
    console.error('Error capturing image:', error);
    return null;
  }
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