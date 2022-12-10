import "./string.js";
import "./number.js";
import "./array.js";

import * as utils from "./utils.js";

declare global {
    /**
     * Utility functions
     */
    var _: typeof utils;
}

globalThis._ = utils;

Object.entries(utils).forEach(([name, exported]) => (globalThis as any)[name] = exported);

export {};