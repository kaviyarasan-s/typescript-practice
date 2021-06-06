"use strict";
exports.__esModule = true;
exports.name = void 0;
var name = /** @class */ (function () {
    function name() {
    }
    name.prototype.func = function () {
        console.log("Function Called!!");
    };
    return name;
}());
exports.name = name;
var obj = new name().func();
