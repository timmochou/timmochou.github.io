/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00D4AA',
          light: '#5EEAD4',
          dark: '#0D9488',
        },
        dark: {
          950: '#0A0A0F',
          900: '#0F0F1A',
          800: '#1A1A2E',
          700: '#252540',
          600: '#2D2D4A',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#A1A1AA',
          muted: '#71717A',
        },
        accent: {
          green: '#22C55E',
          blue: '#3B82F6',
          orange: '#F97316',
          purple: '#A855F7',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Roboto', 'sans-serif'],
        heading: ['Space Grotesk', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(0, 212, 170, 0.5), 0 0 10px rgba(0, 212, 170, 0.3)' },
          '100%': { boxShadow: '0 0 20px rgba(0, 212, 170, 0.8), 0 0 30px rgba(0, 212, 170, 0.5)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      boxShadow: {
        'glow-sm': '0 0 10px rgba(0, 212, 170, 0.3)',
        'glow-md': '0 0 20px rgba(0, 212, 170, 0.4)',
        'glow-lg': '0 0 30px rgba(0, 212, 170, 0.5)',
      },
    },
  },
  plugins: [],
}
