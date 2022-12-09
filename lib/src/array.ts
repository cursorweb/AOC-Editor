interface Array<T extends Number> {
    /**
     * Sorts the array from min to max
     * For example: `[5, 9, 3]` -> `[3, 5, 9]`
     */
    sortAsc(): void;
    /**
     * Sorts the array from max to min
     * For example: `[2, 9, 10]` -> `[10, 9, 2]`
     */
    sortDesc(): void;
    max(): Number;
    min(): Number;
}

Array.prototype.sortAsc = function() {

}