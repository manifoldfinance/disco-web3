import {useEffect} from 'react';
import {theme, darkTheme} from '@nelson-ui/core';

const isSSR = typeof document === "undefined";
const getInvert = (theme$1) => theme$1 === theme.className ? darkTheme.className : theme.className;

function useThemeEffect(theme$1 = "light") {
    const themeClass = theme$1 === "light" ? theme.className : darkTheme.className;
    const htmlTag = !isSSR ? document.getElementsByTagName("html")[0] : void 0;
    const hasThemeClass = htmlTag == null ? void 0 : htmlTag.classList.contains(themeClass);
    const hasModeClass = (htmlTag == null ? void 0 : htmlTag.classList.contains(theme.className)) || (htmlTag == null ? void 0 : htmlTag.classList.contains(darkTheme.className));
    const isDifferentTheme = hasModeClass && !(htmlTag == null ? void 0 : htmlTag.classList.contains(themeClass));
    useEffect(() => {
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

export {useThemeEffect};
