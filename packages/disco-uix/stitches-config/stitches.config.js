import { createStitches } from "@stitches/react";

export const { createTheme, css, getCssText, globalCss, styled, theme } =
  createStitches({
    theme: {
      colors: {
        transparent: "transparent",
        black: "hsl(0, 0%, 0%)",
        white: "hsl(0, 0%, 100%)",

        /*
        add other colors here
      */
      },
      space: {
        1: "4px",
        2: "8px",
        3: "16px",
        4: "24px",
        5: "32px",
        6: "40px",
        7: "48px",
        8: "56px",
        9: "64px",
        10: "72px",
      },
      sizes: {
        1: "4px",
        2: "8px",
        3: "16px",
        4: "32px",
        5: "64px",
        6: "128px",
        7: "256px",
        8: "512px",
      },
      fonts: {
        // add fonts
        system: "system-ui",
      },
      fontSizes: {
        1: "0.75rem",
        2: "0.875rem",
        3: "1rem",
        4: "1.125rem",
        5: "1.25rem",
        6: "1.5rem",
        7: "1.875rem",
        8: "2.25rem",
        9: "3rem",
      },
      lineHeights: {
        1: "1rem",
        2: "1.25rem",
        3: "1.5rem",
        4: "1.75rem",
        5: "1.75rem",
        6: "2rem",
        7: "2.25rem",
        8: "2.5rem",
        9: "1",
      },
      letterSpacings: {
        tighter: "-0.05em",
        tight: "0.025em",
        normal: "0em",
        wide: "0.025em",
        wider: "0.05em",
      },
      fontWeights: {
        thin: "300",
        regular: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
      },
      radii: {
        1: "2px",
        2: "4px",
        2: "6px",
        3: "8px",
        4: "12px",
        5: "16px",
        6: "20px",
        7: "24px",
        max: "9999px",
      },
      zIndices: {
        1: 100,
        2: 200,
        3: 300,
        4: 400,
        5: 500,
        6: 600,
        7: 700,
        8: 800,
        9: 900,
        max: 999,
      },
    },
    utils: {
      //size
      size: (value) => ({
        width: value,
        height: value,
      }),

      //insets
      insetX: (value) => ({
        left: value,
        right: value,
      }),
      insetY: (value) => ({
        top: value,
        bottom: value,
      }),

      //margins and paddings
      marginX: (value) => ({
        marginLeft: value,
        marginRight: value,
      }),
      marginY: (value) => ({
        marginTop: value,
        marginBottom: value,
      }),
      marginLeft: (value) => ({
        marginLeft: value,
      }),
      marginRight: (value) => ({
        marginRight: value,
      }),
      paddingX: (value) => ({
        paddingLeft: value,
        paddingRight: value,
      }),
      paddingY: (value) => ({
        paddingTop: value,
        paddingBottom: value,
      }),
      paddingLeft: (value) => ({
        paddingLeft: value,
      }),
      paddingRight: (value) => ({
        paddingRight: value,
      }),
    },
    media: {
      motionSafe: "(prefers-reduced-motion: no-preference)",
      bp1: "(min-width: 575px)",
      bp2: "(min-width: 750px)",
      bp3: "(min-width: 1000px)",
      bp4: "(min-width: 1200px)",
    },
  });
