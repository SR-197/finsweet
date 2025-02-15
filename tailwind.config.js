/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html"],
  theme: {
    extend: {
      backgroundImage: {
        'radial-inverse': 'radial-gradient(circle, #4c68d7 2%, #1C1E53 95%)',
      },
      fontWeight: {
        '500px': 500, // Custom font weight
        '600':600,
        '400':400
      },
      boxShadow: {
        
        light1: '0px 0px 6px 2px #8080800A', // Very light gray and soft
        light2: '0px 0px 8px 3px #80808014', // Slightly more visible, subtle gray
        light3: '0px 0px 10px 4px #8080801A', // Balanced gray with a gentle spread
      },
      
    },
    screens:{
      "mobile":"300px",
      "desktop":"1100px",
    }
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-shadow-4': { textShadow: '4px 4px 8px rgba(0, 0, 0, 0.5)' },
        '.text-shadow-6': { textShadow: '6px 6px 12px rgba(0, 0, 0, 0.5)' },
        '.text-shadow-8': { textShadow: '8px 8px 16px rgba(0, 0, 0, 0.5)' },
        '.text-shadow-12': { textShadow: '12px 12px 24px rgba(0, 0, 0, 0.5)' },
        '.text-shadow-16': { textShadow: '16px 16px 32px rgba(0, 0, 0, 0.5)' },
        '.text-shadow-20': { textShadow: '20px 20px 40px rgba(0, 0, 0, 0.5)' },
      });
    },
  ],
};