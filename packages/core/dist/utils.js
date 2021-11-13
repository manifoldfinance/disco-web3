'use strict';

Object.defineProperty(exports, '__esModule', {value: true});

const theme = require('@nelson-ui/theme');
const core = require('@stitches/core');
const constants = require('./constants.js');
const theme$1 = require('./theme.js');
const allCssProps = require('./all-css-props.js');
const stitches_config = require('./stitches.config.js');

const cacheMap = new Map();

function makeColors(theme$1) {
    const result = {};
    const colorTheme = theme.colors[theme$1];
    Object.keys(colorTheme).forEach((key) => {
        result[key] = `$${colorTheme[key]}`;
    });
    return result;
}

const makeStitchesWithTheme = (key = "light") => {
    const match = cacheMap.get(key);
    if (match)
        return cacheMap.get(key);
    if (!theme$1.themes[key])
        throw new TypeError('Incorrect theme passed to "makeStitchesWithTheme".');
    const stitches = core.createStitches({
        theme: theme$1.themes[key]
    });
    cacheMap.set(key, stitches);
    return stitches;
};
const cleanProps = ({css = {}, ...props}) => {
    const keys = Object.keys(props);
    const cssProps = {};
    const restProps = {};
    keys.forEach((key) => {
        if (constants.PSEUDO_TAGS[key]) {
            cssProps[constants.PSEUDO_TAGS[key]] = props[key];
        } else {
            core.defaultThemeMap[key] || allCssProps.ALL_CSS_PROPS.includes(key) || Object.keys(stitches_config.config.utils).includes(key) ? cssProps[key] = props[key] : restProps[key] = props[key];
        }
    });
    return {
        cssProps: {
            ...cssProps,
            ...css
        },
        ...restProps
    };
};

exports.cleanProps = cleanProps;
exports.makeColors = makeColors;
exports.makeStitchesWithTheme = makeStitchesWithTheme;
