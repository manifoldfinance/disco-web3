import React from 'react';
import {Stack} from './stack.mjs';

const SpaceBetween = React.forwardRef((props, ref) => /* @__PURE__ */ React.createElement(Stack, {
    spacing: "$0",
    isInline: true,
    ref,
    alignItems: "center",
    justifyContent: "space-between",
    ...props
}));

export {SpaceBetween};
