/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        gradientConic1:
          'radial-gradient(circle, rgba(64,140,134,1) 0%, rgba(15,156,143,1) 52%, rgba(95,207,198,1) 100%)',
      },
    },
  },
  plugins: [],
};
