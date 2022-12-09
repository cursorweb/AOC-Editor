// import * as _ from "./lib/dist/index.js";
/// <reference path="./lib/dist/index.d.ts" />
(async () => {
    const _ = await import("./lib/dist/index.js");
    
    console.log(_.grid('h', 2, 2));
    console.log([2, 3].max());
    console.log((69).chr());
})();