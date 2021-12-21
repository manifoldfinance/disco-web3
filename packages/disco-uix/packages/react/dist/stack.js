'use strict';

Object.defineProperty(exports, '__esModule', {value: true});

const React = require('react');
const box = require('./box.js');
const flex = require('./flex.js');

function _interopDefaultLegacy(e) {
    return e && typeof e === 'object' && 'default' in e ? e : {'default': e};
}

const React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function getValidChildren(children) {
    return React__default["default"].Children.toArray(children).filter((child) => React__default["default"].isValidElement(child));
}

const Stack = React__default["default"].forwardRef(({
                                                        children,
                                                        isInline,
                                                        spacing = "$base",
                                                        divider,
                                                        shouldWrapChildren,
                                                        ...rest
                                                    }, ref) => {
    const validChildren = getValidChildren(children);
    return /* @__PURE__ */ React__default["default"].createElement(flex.Flex, {
        ref,
        gap: spacing,
        flexDirection: isInline ? "row" : "column",
        ...rest
    }, validChildren.map((child, index) => {
        const isLastChild = validChildren.length === index + 1;
        if (shouldWrapChildren)
            return /* @__PURE__ */ React__default["default"].createElement(React__default["default"].Fragment, {
                key: `${index}`
            }, /* @__PURE__ */ React__default["default"].createElement(box.Box, {
                display: "inline-block"
            }, child), !isLastChild ? divider : null);
        return /* @__PURE__ */ React__default["default"].createElement(React__default["default"].Fragment, {
            key: `${index}`
        }, child, !isLastChild && divider ? divider : null);
    }));
});

exports.Stack = Stack;
exports.getValidChildren = getValidChildren;
