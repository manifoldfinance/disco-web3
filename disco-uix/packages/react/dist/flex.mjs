import React, {forwardRef} from 'react';
import {Box} from './box.mjs';

const Flex = forwardRef((props, ref) => /* @__PURE__ */ React.createElement(Box, {
    ref,
    display: "flex",
    ...props
}));

export {Flex};
