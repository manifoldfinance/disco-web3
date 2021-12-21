import React, {forwardRef} from 'react';
import {Grid} from './grid.mjs';

const Centered = forwardRef((props, ref) => /* @__PURE__ */ React.createElement(Grid, {
    ref,
    placeItems: "center",
    ...props
}));

export {Centered};
