'use strict';

Object.defineProperty(exports, '__esModule', {value: true});

const theme = require('@nelson-ui/theme');
const utils = require('./utils.js');

const baseTheme = {
    colors: theme.colors.foundation,
    space: theme.sizes,
    fontSizes: theme.fontSizes,
    fonts: theme.fonts,
    fontWeights: {
        light: 300,
        base: 400,
        semibold: 500,
        bold: 600,
        extrabold: 700
    },
    lineHeights: theme.lineHeights,
    letterSpacings: {},
    sizes: {},
    borderWidths: {
        base: "1px",
        medium: "2px",
        thick: "3px"
    },
    borderStyles: {
        base: "solid"
    },
    radii: theme.borderRadius,
    shadows: theme.boxShadow,
    zIndices: {
        base: 10,
        mid: 50,
        high: 100,
        highest: 99
    },
    transitions: {
        slow: "all 0.8s cubic-bezier(0.23, 1, 0.32, 1)",
        base: "all 0.25s cubic-bezier(0.23, 1, 0.32, 1)",
        fast: "all 0.125s cubic-bezier(0.23, 1, 0.32, 1)"
    }
};
const themes = {
    light: {
        ...baseTheme,
        colors: {
            ...baseTheme.colors,
            ...utils.makeColors("light")
        }
    },
    dark: {
        ...baseTheme,
        colors: {
            ...baseTheme.colors,
            ...utils.makeColors("dark")
        }
    }
};

exports.themes = themes;
