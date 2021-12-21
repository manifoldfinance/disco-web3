'use strict';

Object.defineProperty(exports, '__esModule', {value: true});

const React = require('react');
const stack = require('./stack.js');

function _interopDefaultLegacy(e) {
    return e && typeof e === 'object' && 'default' in e ? e : {'default': e};
}

const React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const SpaceBetween = React__default["default"].forwardRef((props, ref) => /* @__PURE__ */ React__default["default"].createElement(stack.Stack, {
    spacing: "$0",
    isInline: true,
    ref,
    alignItems: "center",
    justifyContent: "space-between",
    ...props
}));

exports.SpaceBetween = SpaceBetween;
