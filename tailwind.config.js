module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    inset: {
      '12': "3rem",
      '7': "1.75rem",
      '22': "5.5rem"
    },
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
     '3': '3px',
      '4': '4px',
     '6': '6px',
     '8': '8px',
    },
    extend: {
      fontFamily: {
        "work-sans": ['"Work Sans"'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};