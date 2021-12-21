import React from 'react';
import {Box} from './box.mjs';
import {Flex} from './flex.mjs';

function getValidChildren(children) {
    return React.Children.toArray(children).filter((child) => React.isValidElement(child));
}

const Stack = React.forwardRef(({children, isInline, spacing = "$base", divider, shouldWrapChildren, ...rest}, ref) => {
    const validChildren = getValidChildren(children);
    return /* @__PURE__ */ React.createElement(Flex, {
        ref,
        gap: spacing,
        flexDirection: isInline ? "row" : "column",
        ...rest
    }, validChildren.map((child, index) => {
        const isLastChild = validChildren.length === index + 1;
        if (shouldWrapChildren)
            return /* @__PURE__ */ React.createElement(React.Fragment, {
                key: `${index}`
            }, /* @__PURE__ */ React.createElement(Box, {
                display: "inline-block"
            }, child), !isLastChild ? divider : null);
        return /* @__PURE__ */ React.createElement(React.Fragment, {
            key: `${index}`
        }, child, !isLastChild && divider ? divider : null);
    }));
});

export {Stack, getValidChildren};
