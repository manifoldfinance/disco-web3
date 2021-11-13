import React, {forwardRef} from 'react';
import {Grid} from './grid.mjs';

const Circle = forwardRef(({
                               size = "36px",
                               borderRadius = size,
                               ...rest
                           }, ref) => /* @__PURE__ */ React.createElement(Grid, {
    ref,
    placeItems: "center",
    size,
    borderRadius,
    ...rest
}));

export {Circle};
