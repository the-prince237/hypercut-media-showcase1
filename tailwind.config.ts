import type { Config } from 'tailwindcss';

/**@type {import('tailwindcss').Config} */
const config: Config = {
  // unabling jit (just in demand) mode
  mode: 'jit',
  content: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  important: '#__next',
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
