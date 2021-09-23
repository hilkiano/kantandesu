import { createTheme } from '@material-ui/core/styles';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';

const breakpoints = createBreakpoints({});

const bodyColor = "#1D2D50";
const containerColor = "#133B5C";
const elementColor = "#1E5F74";
const primaryColor = "#FCDAB7"; 
const secondaryColor = "#57CC99";

export default createTheme({
  palette: {
    common: {
      lightYellow: primaryColor,
      containerColor: containerColor,
      elementColor: elementColor
    },
    primary: {
      main: primaryColor
    },
    secondary: {
      main: secondaryColor
    },
    background: {
      default: bodyColor
    }
  },
  typography: {
    tab: {
      fontFamily: "Montserrat",
      fontSize: "1rem",
      textTransform: "none"
    },
    button: {
      fontFamily: "Montserrat",
      fontWeight: 600
    },
    h3: {
      fontFamily: "Montserrat",
      fontWeight: 400
    },
    h4: {
      fontFamily: "Montserrat",
      fontWeight: 400
    },
    h5: {
      fontFamily: "Poppins",
      fontWeight: 400
    },
    caption: {
      fontFamily: "Poppins",
      fontWeight: 400,
      fontSize: "1.25rem",
      color: primaryColor,
      [breakpoints.down("md")]: {
        fontSize: "1rem"
      }
    }
  },
  overrides: {
    MuiTypography: {
      body1: {
        fontFamily: "Montserrat"
      }
    },
    MuiCheckbox: {
      colorPrimary: {
        color: primaryColor
      },
      colorSecondary: {
        color: secondaryColor
      }
    },
    MuiTabs: {
      indicator: {
        backgroundColor: bodyColor
      }
    },
    MuiTab: {
      textColorInherit: {
        color: "white"
      }
    },
    MuiFormLabel: {
      root: {
        color: "white",
        fontFamily: "Montserrat"
      }
    },
    MuiInputBase: {
      root: {
        color: "white",
        fontFamily: "Montserrat",
      },
      input: {
        color: "white"
      }
    },
    MuiOutlinedInput: {
      root: {
        '& fieldset': {
          borderColor: "white"
        },
        '&:hover fieldset': {
          borderColor: `${primaryColor} !important`
        }
      }
    },
    MuiDialogTitle: {
      root: {
        fontFamily: "Poppins",
        fontSize: "1.15rem"
      }
    },
    MuiSelect: {
      icon: {
        color: "white"
      }
    },
    MuiMenuItem: {
      root: {
        fontFamily: "Montserrat"
      }
    },
    MuiAccordion: {
      root: {
        '&:before': {
          display: 'none'
        },
      },
    }
  }
});