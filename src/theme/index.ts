import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

export const theme = extendTheme(
  withDefaultColorScheme({
    colorScheme: "#6F7FF7",
    components: ["Link", "Heading"],
  }),
  {
    semanticTokens: {
      colors: {
        error: "#FF3030",
        success: "#8BE35B",
        primary: {
          default: "#6F7FF7",
          _dark: "#92A0FA",
        },
        secondary: {
          default: "cyan.300",
          _dark: "cyan.200",
        },
        text: {
          default: "#3366FF",
        },
        graybg: {
          default: "#F7FAFC",
          _dark: "#000",
        },
      },
    },
    components: {
      Box: {
        baseStyle: {
          transition: "all 0.2s ease-out",
        },
      },
      Flex: {
        baseStyle: {
          transition: "all 0.2s ease-out",
        },
      },
      Text: {
        baseStyle: {
          fontWeight: "400",
          fontFamily: "Montserrat, Poppins, sans-serif",
          fontSize: ["sm", "sm", "md"],
          color: "#14113D",
          transition: "all 0.2s ease-out",
        },
        variants: {
          truncated: {
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
            w: "16",
            textAlign: "center",
          },
        },
      },
      Button: {
        baseStyle: {
          color: "#000",
          fontFamiliy: "Montserrat, sans-serif",
          transition: "all 0.2s ease-out",
          colorScheme: "primary",
        },
      },
    },
  }
);

export const fonts = {
  MontserratAlt: "Montserrat Alternates",
  Montserrat: "Montserrat",
  Jost: "Jost",
  Poppins: "Poppins",
  Digital: "Digital Numbers Regular",
};

export const colors = {
  error: "#FF3030",
  success: "#48BB78",
  primary: {
    default: "#6F7FF7",
    _dark: "#92A0FA",
  },
  secondary: {
    default: "cyan.300",
    _dark: "cyan.200",
  },
  text: {
    default: "#3366FF",
  },
  graybg: {
    default: "#F7FAFC",
    _dark: "#000",
  },
};
