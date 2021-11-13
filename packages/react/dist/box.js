'use strict';

Object.defineProperty(exports, '__esModule', {value: true});

const React = require('react');
const clsx = require('clsx');
const core = require('@nelson-ui/core');

function _interopDefaultLegacy(e) {
    return e && typeof e === 'object' && 'default' in e ? e : {'default': e};
}

const React__default = /*#__PURE__*/_interopDefaultLegacy(React);
const clsx__default = /*#__PURE__*/_interopDefaultLegacy(clsx);

const Box = React.forwardRef(({as: Comp = "div", className, children, css: cssProp, ...props}, ref) => {
    const {cssProps, ...rest} = React.useMemo(() => core.cleanProps(props), [props]);
    const stitches = React.useMemo(() => core.css(cssProps)({css: cssProp}), [core.css, cssProps, cssProp]);
    return /* @__PURE__ */ React__default["default"].createElement(Comp, {
        ref,
        className: clsx__default["default"]([className, stitches.className]),
        ...rest
    }, children);
});

exports.Box = Box;
