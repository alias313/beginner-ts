"use strict";
;
;
// @ts-expect-error: Not merging all the properties of merging interfaces
const process = {
    action: () => { },
};
process.action();
