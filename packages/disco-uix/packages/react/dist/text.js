'use strict';

Object.defineProperty(exports, '__esModule', {value: true});

const React = require('react');
const theme = require('@nelson-ui/theme');
const box = require('./box.js');
const clsx = require('clsx');

function _interopDefaultLegacy(e) {
    return e && typeof e === 'object' && 'default' in e ? e : {'default': e};
}

const React__default = /*#__PURE__*/_interopDefaultLegacy(React);
const clsx__default = /*#__PURE__*/_interopDefaultLegacy(clsx);

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
const Text = React__default["default"].forwardRef(({variant, className, css = {}, ...props}, ref) => {
    const color = variant && getDefaultColor(variant);
    const styles = variant ? theme.typeStyles[variant] : {};
    return /* @__PURE__ */ React__default["default"].createElement(box.Box, {
        className: clsx__default["default"]([className]),
        ref,
        color,
        css: {
            ...styles,
            ...css
        },
        ...props
    });
});

exports.Text = Text;
