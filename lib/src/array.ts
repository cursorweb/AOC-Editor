export {};

declare global {
    interface Array<T> {
        /**
         * Sorts the array from min to max
         * For example: `[5, 9, 3]` -> `[3, 5, 9]`
         */
        sortAsc(): Array<number>;

        /**
         * Sorts the array from max to min
         * For example: `[2, 9, 10]` -> `[10, 9, 2]`
         */
        sortDesc(): Array<number>;

        /**
         * Returns max of array
         */
        max(): number;

        /**
         * Returns min of array
         */
        min(): number;

        /**
         * Returns sum
         */
        sum(): number;

        /**
         * Map all the values to a number
         */
        mapToNum(): Array<number>;
    }
}

Array.prototype.sortAsc = function () {
    (this as Array<number>).sort((a, b) => a - b);
    return this;
}

Array.prototype.sortDesc = function () {
    (this as Array<number>).sort((a, b) => b - a);
    return this;
}

Array.prototype.min = function () {
    return Math.min(...this);
}

Array.prototype.max = function () {
    return Math.max(...this);
}

Array.prototype.sum = function () {
    return (this as Array<number>).reduce((a, b) => a + b);
}

Array.prototype.mapToNum = function() {
    return (this as Array<any>).map(Number);
}