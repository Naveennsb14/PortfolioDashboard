import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

export const theme = extendTheme({ 

  colors:{
    purple:{
      500: "#5F00D9"
    },
    p:{
      purple: "#5F00D9",
      black: "#171717",
    },
    black: {
      5: "#F3F3F7",
      10: "#EEEEF4",
      20: "#D8DDE2",
      40: "#BABAC4",
      60: "#797E82",
      80: "#535D66"
    }
  },
    fonts: {
    heading: `Ubuntu`,
    body: "Ubuntu",
  },
  textStyles:{
    h1: {
      fontSize: {
        base: "30px",
        md: "32px",
      },
      color: "p.black",
      lineHeigt: {
        base: "34px",
        md: "36px",
      },
    },
  },
  fontSizes: {
    xs: "12px",
    sm: "14px",
    base: {base: "16px", md: "18px"},
    lg: {base: "18px", md: "20px"},
    xl: {base: "20px", md: "22px"},
    "2xl": {base: "22px", md: "24px"},
    "3xl": {base: "24px", md: "28px"},
    "4xl": {base: "30px", md: "32px"},

  },
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: '#F3F3F7',
      },
      // styles for the `a`
     
    },
  },

  componenets:{
    Button: {
      baseStyle: {
        fontWeight: "bold",
        borderRadius: "10px",
      },
    }
  }
}, 
withDefaultColorScheme({ colorScheme: 'purple' }),
)