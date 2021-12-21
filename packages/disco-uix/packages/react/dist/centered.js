'use strict';

Object.defineProperty(exports, '__esModule', {value: true});

const React = require('react');
const grid = require('./grid.js');

function _interopDefaultLegacy(e) {
    return e && typeof e === 'object' && 'default' in e ? e : {'default': e};
}

const React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const Centered = React.forwardRef((props, ref) => /* @__PURE__ */ React__default["default"].createElement(grid.Grid, {
    ref,
    placeItems: "center",
    ...props
}));

exports.Centered = Centered;
