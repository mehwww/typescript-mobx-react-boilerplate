const pxtoFactory = require('polished/lib/internalHelpers/_pxto');
const vwFunc = pxtoFactory('vw');

export const rgba = require('polished/lib/color/rgba');

export const vw = (val: string | number, base = 750 / 100): string => vwFunc(val, base);
