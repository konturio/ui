import react from '@vitejs/plugin-react';
import * as path from 'path';
import { defineConfig } from 'vite';

declare const process: {
  readonly env: {
    [name: string]: string;
  };
};

import { UserConfig, UserConfigFn } from 'vite';

const { BROWSER, PORT } = process.env;

// https://vitejs.dev/config/
export default ({ mode }) => {
  return defineConfig({
    plugins: [react()],
    server: {
      port: (PORT && parseInt(PORT)) || 3000,
    },
    esbuild: {
      // Avoid conflicting with "import React"
      jsxFactory: '_implicit_React.createElement',
      jsxFragment: '_implicit_React.Fragment',
      jsxInject: 'import _implicit_React from "react"',
    },
    build: {
      target: 'esnext',
      outDir: '../cosmos-export',
      rollupOptions: {
        input: {
          renderer: path.resolve(__dirname, 'cosmos/renderer.html'), // for cosmos experimentalRendererUrl
        },
      },
    },
    base: '',
    root: './cosmos',
  });
};
