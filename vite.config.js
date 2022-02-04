import vue from '@vitejs/plugin-vue';
import legacy from '@vitejs/plugin-legacy';
import ViteRestart from 'vite-plugin-restart';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import path from 'path';
import svgLoader from 'vite-svg-loader';
import eslintPlugin from 'vite-plugin-eslint';
// import builtins from 'rollup-plugin-node-builtins'

const fs = require('fs');

// https://vitejs.dev/config/
export default ({ command }) => ({
  base: command === 'serve' ? '' : '/dist/',
  build: {
    emptyOutDir: true,
    manifest: true,
    outDir: 'dist',
    rollupOptions: {
      // plugins: [
      //   builtins({
      //     crypto: true,
      //     http: false,
      //     https: false,
      //     url: false,
      //   }),
      // ],
      // external: ['crypto', 'http', 'https', 'url'],
      input: {
        main: 'src/main.js',
      },
      output: {
        sourcemap: true,
      },
    },
  },
  optimizeDeps: {
    include: [
      '@fawmi/vue-google-maps',
      // 'marker-clusterer-plus',
      'glightbox',
    ],
  },
  plugins: [
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
    nodeResolve({
      moduleDirectories: [
        path.resolve('./node_modules'),
      ],
    }),
    // eslintPlugin({
    //   cache: false,
    //   fix: true,
    // }),
    vue(),
    svgLoader({
      svgo: true,
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      vue: path.resolve(__dirname, './node_modules/vue/dist/vue.esm-bundler.js'),
    },
  },
});
