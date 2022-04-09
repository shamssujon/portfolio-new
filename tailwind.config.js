module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      // '2xl': '1500px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
        // laptop: "2rem",
      },
    },
    fontFamily: {
      'display': ['MuseoModerno'],
      'body': ['Quicksand', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: {
          light: '#36E7F7',
          DEFAULT: '#1b1b87',
          // DEFAULT: '#020F60',
          dark: '#000943',
        },
        secondary: {
          DEFAULT: '#2FDF84',
          dark: '#00B871',
        }
      },
      aspectRatio: {
        '4/3': '4 / 3',
      },
    },
  },
  variants: {
    extend: {
      animation: ['responsive', 'motion-safe', 'motion-reduce']
    },
  },
  plugins: [],
};
