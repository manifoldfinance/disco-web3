'use strict';

Object.defineProperty(exports, '__esModule', {value: true});

const core = require('@stitches/core');
const theme$1 = require('./theme.js');

const {css, getCssText, theme, createTheme, globalCss, prefix, keyframes, config, reset} = core.createStitches({
    media: {
        bp1: "(min-width: 640px)",
        bp2: "(min-width: 768px)",
        bp3: "(min-width: 1024px)"
    },
    theme: theme$1.themes.light,
    utils: {
        m: (value) => ({
            margin: value
        }),
        mt: (value) => ({
            marginTop: value
        }),
        mr: (value) => ({
            marginRight: value
        }),
        mb: (value) => ({
            marginBottom: value
        }),
        ml: (value) => ({
            marginLeft: value
        }),
        mx: (value) => ({
            marginLeft: value,
            marginRight: value
        }),
        my: (value) => ({
            marginTop: value,
            marginBottom: value
        }),
        p: (value) => ({
            padding: value
        }),
        pt: (value) => ({
            paddingTop: value
        }),
        pr: (value) => ({
            paddingRight: value
        }),
        pb: (value) => ({
            paddingBottom: value
        }),
        pl: (value) => ({
            paddingLeft: value
        }),
        px: (value) => ({
            paddingLeft: value,
            paddingRight: value
        }),
        py: (value) => ({
            paddingTop: value,
            paddingBottom: value
        }),
        size: (value) => ({
            width: value,
            height: value
        })
    }
});
const darkTheme = createTheme("dark-theme", theme$1.themes.dark);

exports.config = config;
exports.createTheme = createTheme;
exports.css = css;
exports.darkTheme = darkTheme;
exports.getCssText = getCssText;
exports.globalCss = globalCss;
exports.keyframes = keyframes;
exports.prefix = prefix;
exports.reset = reset;
exports.theme = theme;
