import React, {forwardRef} from 'react';
import {Flex} from './flex.mjs';

const IconButton = forwardRef((props, ref) => {
    const {
        icon: Icon,
        iconSize = "20px",
        iconProps = {},
        invert,
        _hover = {},
        isHovered,
        ...rest
    } = props;
    return /* @__PURE__ */ React.createElement(Flex, {
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
    }, /* @__PURE__ */ React.createElement(Icon, {
        display: "block",
        size: iconSize,
        color: "currentColor",
        ...iconProps
    }));
});

export {IconButton};
