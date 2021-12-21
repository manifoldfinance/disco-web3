import {colors} from '@nelson-ui/theme';
import {createStitches, defaultThemeMap} from '@stitches/core';
import {PSEUDO_TAGS} from './constants.mjs';
import {themes} from './theme.mjs';
import {ALL_CSS_PROPS} from './all-css-props.mjs';
import {config} from './stitches.config.mjs';

const cacheMap = new Map();

function makeColors(theme) {
    const result = {};
    const colorTheme = colors[theme];
    Object.keys(colorTheme).forEach((key) => {
        result[key] = `$${colorTheme[key]}`;
    });
    return result;
}

const makeStitchesWithTheme = (key = "light") => {
    const match = cacheMap.get(key);
    if (match)
        return cacheMap.get(key);
    if (!themes[key])
        throw new TypeError('Incorrect theme passed to "makeStitchesWithTheme".');
    const stitches = createStitches({
        theme: themes[key]
    });
    cacheMap.set(key, stitches);
    return stitches;
};
const cleanProps = ({css = {}, ...props}) => {
    const keys = Object.keys(props);
    const cssProps = {};
    const restProps = {};
    keys.forEach((key) => {
        if (PSEUDO_TAGS[key]) {
            cssProps[PSEUDO_TAGS[key]] = props[key];
        } else {
            defaultThemeMap[key] || ALL_CSS_PROPS.includes(key) || Object.keys(config.utils).includes(key) ? cssProps[key] = props[key] : restProps[key] = props[key];
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

export {cleanProps, makeColors, makeStitchesWithTheme};
