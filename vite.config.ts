import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const proxyTarget = env.VITE_DEV_PROXY_TARGET || 'http://localhost';
  const proxyApiPrefix = env.VITE_DEV_PROXY_API_PREFIX || '/api';

  return {
    plugins: [react()],
    optimizeDeps: {
      include: ['lucide-react'],
    },
    server: {
      // Always register for dev/preview. Not used by `vite build`. Do not gate on NODE_ENV (often unset on Windows).
      proxy: {
        '/api': {
          target: proxyTarget,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, proxyApiPrefix),
        },
      },
    },
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: false,
      chunkSizeWarningLimit: 1000,
      rollupOptions: {
        output: {
          manualChunks: (id) => {
            if (id.includes('node_modules')) {
              if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) {
                return 'vendor-react';
              }
              if (id.includes('lucide-react')) {
                return 'vendor-icons';
              }
              return 'vendor';
            }
            if (id.includes('components/quality') || id.includes('components/manufacturing')) {
              return 'chunk-heavy';
            }
            if (id.includes('components/about') || id.includes('components/products')) {
              return 'chunk-content';
            }
          },
        },
      },
    },
  };
});
