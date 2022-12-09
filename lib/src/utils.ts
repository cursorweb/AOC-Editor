/**
 * Repeat the `val` `amount` times
 * @param val The value
 * @param amount Number of times to repeat
 * @returns Array
 */
export function arrayRepeat<T>(val: T, amount: number) {
    return new Array(amount).fill(val);
}

type RecArray<T> = Array<T | RecArray<T>>;
/**
 * Creates a simple grid
 * @param val The value
 * @param sizes The dimensions
 * @returns An array grid
 */
export function grid<T>(val: T, ...sizes: number[]): RecArray<T> {
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

/**
 * Automatically sets undefined values to the default value.
 * For example,
 * ```js
 * const counter = new AutoMap(0);
 * counter.incr("x");
 * console.log(counter.map); // { x: 1 }
 * ```
 */
export class Counter<K extends string, V extends number> {
    /**
     * The internal hashmap that is being edited
     */
    public map: Map<K, V>;
    private v: V;

    constructor(v: V = 0 as V) {
        this.map = new Map();
        this.v = v;
    }

    /**
     * Increase the value of `key`. Should only be used with numbers.
     * Equivalent to `.set(key, x => x + 1)`
     * @param key The key to set
     */
    public incr(key: K) {
        this.set(key, v => v as number + 1 as V);
    }

    /**
     * Sets the key.
     * @param key Key
     * @param f Function to increase
     */
    public set(key: K, f: (v: V) => V) {
        let val = this.map.get(key);

        if (!val) {
            this.map.set(key, this.v);
            val = this.v;
        }

        val = f(val);

        this.map.set(key, val);
    }

    /**
     * Get's the key.
     * @param key Key
     * @returns Val
     */
    public get(key: K) {
        return this.map.get(key) || this.v;
    }
}
