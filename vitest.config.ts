/// <reference types="vitest" />
import { defineConfig } from 'vite';
import vitestNuxtPlugin from './vitest-nuxt-plugin';

export default defineConfig({
  plugins: [vitestNuxtPlugin()],
  test: {
    dir: 'tests',
  },
});
