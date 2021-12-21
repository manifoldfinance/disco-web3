'use strict';

Object.defineProperty(exports, '__esModule', {value: true});

const React = require('react');
const flex = require('./flex.js');

function _interopDefaultLegacy(e) {
    return e && typeof e === 'object' && 'default' in e ? e : {'default': e};
}

const React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const IconButton = React.forwardRef((props, ref) => {
    const {
        icon: Icon,
        iconSize = "20px",
        iconProps = {},
        invert,
        _hover = {},
        isHovered,
        ...rest
    } = props;
    return /* @__PURE__ */ React__default["default"].createElement(flex.Flex, {
        backgroundColor: "transparent",
        border: "0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        as: "button",
        placeItems: "center",
        borderRadius: "100%",
        size: "36px",
        position: "relative",
        userSelect: "none",
        _hover: {
            cursor: "pointer",
            ..._hover
        },
        color: "currentColor",
        ref,
        ...rest
    }, /* @__PURE__ */ React__default["default"].createElement(Icon, {
        display: "block",
        size: iconSize,
        color: "currentColor",
        ...iconProps
    }));
});

exports.IconButton = IconButton;
