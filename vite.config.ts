declare const process: {
  readonly env: {
    [name: string]: string;
  };
};

import { UserConfig, UserConfigFn } from 'vite';
// import checker from 'vite-plugin-checker';

const { BROWSER, PORT } = process.env;

const config: UserConfigFn = async () => {
  const config: UserConfig = {
    plugins: [
      // Uncomment after merge https://github.com/fi3ework/vite-plugin-checker/pull/66
      // checker({
      //   typescript: {
      //     buildMode: true
      //   },
      // }),
    ],
    esbuild: {
      // Avoid conflicting with "import React"
      jsxFactory: '_implicit_React.createElement',
      jsxFragment: '_implicit_React.Fragment',
      jsxInject: 'import _implicit_React from "react"',
    },

    server: {
      port: (PORT && parseInt(PORT)) || 3000,
    },

    root: './cosmos',
  };

  return config;
};

export default config;
