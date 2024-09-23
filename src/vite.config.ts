// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [
    react({
      // Use the babel-plugin-import to import components and styles on demand
      babel: {
        plugins: [
          [
            'import',
            {
              libraryName: 'antd',
              libraryDirectory: 'es',
              style: true, // Load less files
            },
            'antd',
          ],
        ],
      },
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          '@primary-color': '#0A1F44', // Dark blue
          '@border-radius-base': '10px',
          '@font-size-base': '16px',
          '@heading-color': '#ffffff',
          '@text-color': '#A0AAB8',
          '@layout-body-background': '#131722',
          '@component-background': '#1C2331',
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});