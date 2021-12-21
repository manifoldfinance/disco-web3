import React, {forwardRef} from 'react';
import {Box} from './box.mjs';

const Grid = forwardRef((props, ref) => /* @__PURE__ */ React.createElement(Box, {
    ref,
    display: "grid",
    ...props
}));

export {Grid};
