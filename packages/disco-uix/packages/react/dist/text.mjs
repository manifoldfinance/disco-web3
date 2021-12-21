import React from 'react';
import {typeStyles} from '@nelson-ui/theme';
import {Box} from './box.mjs';
import clsx from 'clsx';

const getDefaultColor = (type) => {
    switch (type) {
        case "Body01":
        case "Body02":
            return "text";
        case "Caption01":
        case "Caption02":
            return "text-subdued";
        case "Display01":
        case "Display02":
        case "Heading01":
        case "Heading02":
        case "Heading03":
        case "Heading04":
        case "Heading05":
            return "text";
        case "Label01":
        case "Label02":
        case "Label03":
            return "text-dim";
    }
};
const Text = React.forwardRef(({variant, className, css = {}, ...props}, ref) => {
    const color = variant && getDefaultColor(variant);
    const styles = variant ? typeStyles[variant] : {};
    return /* @__PURE__ */ React.createElement(Box, {
        className: clsx([className]),
        ref,
        color,
        css: {
            ...styles,
            ...css
        },
        ...props
    });
});

export {Text};
