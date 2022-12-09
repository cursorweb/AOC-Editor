export { };
declare global {
    interface Number {
        /**
         * Like the python chr function
         */
        chr(): string;
    }
}

Number.prototype.chr = function () {
    return String.fromCharCode(this);
}