export { };

declare global {
    interface String {
        /**
         * Return the characters of the string
         */
        chars(): String[];

        /**
         * Like the python ord function
         */
        ord(): number;

        /**
         * Returns if `x.toUpperCase() == x`
         */
        isUpper(): boolean;

        /**
         * Like the python upper function
         */
        upper(): string;

        /**
         * Returns if `x.toLowerCase() == x`
         */
        isLower(): boolean;

        /**
         * Like the python lower function
         */
        lower(): string;
    }
}

String.prototype.chars = function () {
    return (this as string).split("");
}

String.prototype.ord = function () {
    return (this as string).charCodeAt(0);
}

String.prototype.isUpper = function () {
    return (this as string).toUpperCase() == this;
}

String.prototype.upper = function () {
    return (this as string).toUpperCase();
}

String.prototype.isLower = function () {
    return (this as string).toLowerCase() == this;
}

String.prototype.lower = function () {
    return (this as string).toLowerCase();
}