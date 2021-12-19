module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '12rem',
    },
    fontFamily: {
      fira: ['Fira Code'],
      mada: ['Mada'],
      chivo: ['Chivo'],
    },
    spacing: {
      1: '0.5rem',
      2: '1rem',
      3: '1.5rem',
      4: '2rem',
      5: '2.5rem',
      6: '3rem',
      7: '3.5rem',
      8: '4rem',
      9: '4.5rem',
      10: '5rem',
      11: '5.5rem',
      12: '6rem',
      13: '12rem',
      14: '24rem',
    },

    extend: {
      colors: {
        // brand
        'fgl-primary': '#092147', // Downriver
        'fgl-lime': '#c2d730', // Lime
        'fgl-coconut': '#f2f7d5', // Coconut Cream
        'fgl-valencia': '#db3e4d', // Valencia

        // status
        'fgl-success': '#207f4c', // Eucalyptus
        'fgl-info': '#d1d2d1', // Pumice
        'fgl-warning': '#ffd111', // Candlelight
        'fgl-error': '#cc2200', // Milano
        'fgl-text-color-1': '#2d2e36', // Charade
        'fgl-text-color-2': '#2b333e', // Ebony Clay
        'fgl-text-color-3': '#c8c9c7', // Kangaroo
        'fgl-border-color': '#939597', // Oslo Gray
      },
      fontSize: {
        caption: '0.64rem',
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
}
