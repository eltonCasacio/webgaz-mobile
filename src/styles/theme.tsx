export default {
  grid: {
    container: '130%',
    gutter: '3.2%',
  },
  border: {
    radius: '0.4%',
  },
  font: {
    family:
      "Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    light: 300,
    normal: 400,
    bold: 600,
    sizes: {
      xsmall: '1%',
      small: '1.4%',
      medium: '1.6%',
      large: '1.8%',
      xlarge: '2.0%',
      xxlarge: '2.8%',
    },
  },
  colors: {
    primary: '#033E8C',
    secondary: '#F2CB05',
    mainBg: '#00227e',
    white: '#FAFAFA',
    black: '#030517',
    lightGray: '#EAEAEA',
    gray: '#8F8F8F',
    darkGray: '#2E2F42',
    border: '#f2cb05d8',
  },
  spacings: {
    xxsmall: '0.5%',
    xsmall: '1.6%',
    small: '2.4%',
    medium: '3.2%',
    large: '4.0%',
    xlarge: '4.8%',
    xxlarge: '5.6%',
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50,
  },
  sizes: {
    small: '5%',
    medium: '10%',
    large: '20%',
    fullWidth: '100%',
  },
} as const;