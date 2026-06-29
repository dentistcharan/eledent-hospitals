module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#E87733',
          dark: '#cf6428',
          light: '#FFF4EC',
          lighter: '#FFF8F3',
        },
        dark: {
          DEFAULT: '#171717',
          2: '#2d2d2d',
          3: '#484848',
        },
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
};
