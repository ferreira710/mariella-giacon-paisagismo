const { nextui } = require('@nextui-org/react')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/components/(image|navbar).js'
  ],
  theme: {
    extend: {
      screens: {
        profileImage: '1112px'
      },
      colors: {
        text: '#101b0e',
        background: '#ecf4eb',
        primary: '#77b36f',
        secondary: '#cde3ca',
        accent: '#4f8547'
      }
    }
  },
  darkMode: 'class',
  plugins: [nextui()]
}
