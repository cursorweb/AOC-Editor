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
export class CounterClass<K extends string, V extends number> {
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
     * Sets the key.
     * @param key Key
     * @param f Function to increase
     */
    public set(key: K, val: V) {
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

/**
 * A Proxy for ease of use
 * @returns New CounterClass instance
 */
export function Counter() {
    return new Proxy(new CounterClass(), {
        get(target, key) {
            return target.get(key as string);
        },
        set(target, key, val) {
            target.set(key as string, val);
            return val;
        },
    });
}