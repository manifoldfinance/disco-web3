import React, {forwardRef, useMemo} from 'react';
import clsx from 'clsx';
import {cleanProps, css} from '@nelson-ui/core';

const Box = forwardRef(({as: Comp = "div", className, children, css: cssProp, ...props}, ref) => {
    const {cssProps, ...rest} = useMemo(() => cleanProps(props), [props]);
    const stitches = useMemo(() => css(cssProps)({css: cssProp}), [css, cssProps, cssProp]);
    return /* @__PURE__ */ React.createElement(Comp, {
        ref,
        className: clsx([className, stitches.className]),
        ...rest
    }, children);
});

export {Box};
