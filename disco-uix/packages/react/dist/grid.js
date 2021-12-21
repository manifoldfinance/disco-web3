'use strict';

Object.defineProperty(exports, '__esModule', {value: true});

const React = require('react');
const box = require('./box.js');

function _interopDefaultLegacy(e) {
    return e && typeof e === 'object' && 'default' in e ? e : {'default': e};
}

const React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const Grid = React.forwardRef((props, ref) => /* @__PURE__ */ React__default["default"].createElement(box.Box, {
    ref,
    display: "grid",
    ...props
}));

exports.Grid = Grid;
