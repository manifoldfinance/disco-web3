'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const baseSizes = {
  "0": "0px",
  px: "1px",
  "1": "4px",
  "2": "8px",
  "3": "12px",
  "4": "16px",
  "5": "20px",
  "6": "24px",
  "8": "32px",
  "10": "40px",
  "12": "48px",
  "16": "64px",
  "20": "80px",
  "24": "96px",
  "32": "128px",
  "40": "160px",
  "48": "192px",
  "56": "224px",
  "64": "256px"
};
const namedSpacingUnits = {
  none: baseSizes[0],
  "extra-tight": baseSizes[1],
  tight: baseSizes[2],
  "base-tight": baseSizes[3],
  base: baseSizes[4],
  "base-loose": baseSizes[5],
  loose: baseSizes[6],
  "extra-loose": baseSizes[8],
  auto: "auto"
};
const sizes = {
  ...baseSizes,
  ...namedSpacingUnits
};

exports.baseSizes = baseSizes;
exports.namedSpacingUnits = namedSpacingUnits;
exports.sizes = sizes;
