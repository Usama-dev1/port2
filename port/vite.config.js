// vite.config.js
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'port' // or 'dist' if that’s what you use
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
