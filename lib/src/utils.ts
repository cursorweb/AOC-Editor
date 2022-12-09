/**
 * Repeat the `val` `amount` times
 * @param val The value
 * @param amount Number of times to repeat
 * @returns Array
 */
export function arrayRepeat<T>(val: T, amount: number) {
    return new Array(amount).fill(val);
}

/**
 * Creates a simple grid
 * @param val The value
 * @param sizes The dimensions
 * @returns An array grid
 */
export function grid<T>(val: T, ...sizes: number[]): unknown[] {
    if (sizes.length == 1) {
        const out = [];
        for (let i = 0; i < sizes[0]; i++) {
            out.push(val);
        }
        return out;
    }

    const out = [];

    for (let i = 0; i < sizes[0]; i++) {
        out.push(grid(val, ...sizes.slice(1)));
    }

    return out;
}