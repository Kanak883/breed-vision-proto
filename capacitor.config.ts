import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.breedvision.app',
  appName: 'BreedVision Prototype',
  webDir: 'dist',
  server: {
    url: 'https://3761ca6e-9038-4712-ac52-d6db2a40673f.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    Camera: {
      permissions: ['camera', 'photos']
    }
  }
};

export default config;