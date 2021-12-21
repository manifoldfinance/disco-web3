import {createStitches} from '@stitches/core';
import {themes} from './theme.mjs';

const {css, getCssText, theme, createTheme, globalCss, prefix, keyframes, config, reset} = createStitches({
    media: {
        bp1: "(min-width: 640px)",
        bp2: "(min-width: 768px)",
        bp3: "(min-width: 1024px)"
    },
    theme: themes.light,
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
const darkTheme = createTheme("dark-theme", themes.dark);

export {config, createTheme, css, darkTheme, getCssText, globalCss, keyframes, prefix, reset, theme};
