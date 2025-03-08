import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Portfoliio/', // 👈 Add this (Replace "Portfoliio" with your repo name)
});
