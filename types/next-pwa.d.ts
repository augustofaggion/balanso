declare module 'next-pwa' {
  import type { NextConfig } from 'next';

  type PWAOptions = {
    dest: string;
    register?: boolean;
    skipWaiting?: boolean;
    disable?: boolean;
    runtimeCaching?: any;
    buildExcludes?: string[];
    fallbacks?: {
      image?: string;
      document?: string;
      font?: string;
      audio?: string;
      video?: string;
    };
  };

  const withPWA: (options: PWAOptions) => (nextConfig: NextConfig) => NextConfig;
  export default withPWA;
}
