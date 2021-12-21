'use strict';

Object.defineProperty(exports, '__esModule', {value: true});

const React = require('react');
const core = require('@nelson-ui/core');

const isSSR = typeof document === "undefined";
const getInvert = (theme) => theme === core.theme.className ? core.darkTheme.className : core.theme.className;

function useThemeEffect(theme = "light") {
    const themeClass = theme === "light" ? core.theme.className : core.darkTheme.className;
    const htmlTag = !isSSR ? document.getElementsByTagName("html")[0] : void 0;
    const hasThemeClass = htmlTag == null ? void 0 : htmlTag.classList.contains(themeClass);
    const hasModeClass = (htmlTag == null ? void 0 : htmlTag.classList.contains(core.theme.className)) || (htmlTag == null ? void 0 : htmlTag.classList.contains(core.darkTheme.className));
    const isDifferentTheme = hasModeClass && !(htmlTag == null ? void 0 : htmlTag.classList.contains(themeClass));
    React.useEffect(() => {
        if (isSSR || !htmlTag)
            return;
        if (!hasThemeClass)
            htmlTag.classList.add(themeClass);
        if (isDifferentTheme) {
            htmlTag.classList.remove(getInvert(themeClass));
            htmlTag.classList.add(themeClass);
        }
    }, [isSSR, htmlTag, themeClass, hasModeClass, hasThemeClass]);
}

exports.useThemeEffect = useThemeEffect;
