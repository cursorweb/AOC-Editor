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
     * Increase by amount
     * @param key Key
     * @param amt Amount
     */
    public incr(key: K, amt = 1) {
        this.setf(key, x => x as number + amt as V);
    }

    /**
     * Set based on function
     * @param key Key
     * @param f Func
     */
    public setf(key: K, f: (v: V) => V) {
        this.set(key, f(this.get(key)));
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
 * A Proxy for ease of use.
 * You may not use map as a key, so be careful.
 * ```js
 * const x = Counter();
 * x.a++;
 * x.b++;
 * console.log(x.map);
 * ```
 * @returns New CounterClass instance
 */
export function Counter(v = 0) {
    return new Proxy(new CounterClass(v), {
        get(target, key) {
            if (key == 'map') {
                return target.map;
            }

            return target.get(key as string);
        },
        set(target, key, val) {
            if (key == 'map') {
                throw new Error("Cannot set property map.");
            }

            target.set(key as string, val);
            return val;
        }
    });
}

/**
 * Prints an MxN grid.
 * Don't `console.log` this!
 * ```js
 * showGrid(grid('.', 2, 2));
 * 
 * // ..
 * // ..
 * ```
 * @param grid The grid
 * @param mapF Special inner join function (e.g. `x => x.join("\n")`)
 * @param sep Special joiner (e.g. `\n`)
 */
export function showGrid<T>(grid: T[][], mapF = (x: T[]) => x.join(""), sep = "\n") {
    console.log(grid.map(mapF).join(sep));
}

let shouldLog = true;

/**
 * Disable `log` calls
 * To enable quickly
 * ```js
 * noLog(true);
 * ```
 * @param yes Optionally enable it
 */
export function noLog(yes = false) {
    shouldLog = yes;
}

/**
 * Logs all the text, but you can disable with `noLog();`
 * @param text Text
 */
export function log(...text: any[]) {
    if (shouldLog) {
        console.log(...text);
    }
}

/**
 * Log each with variable. This adheres to noLog as well.
 * ```js
 * let a = 5, b = 6, c = 7;
 * debug({ a, b, c });
 * // a: 5 b: 6 c: 7
 * ```
 * @param text Text
 * @param newline optionally print on each line
 */
export function debug(text: Record<string, any>, newline = false) {
    if (!shouldLog) return;

    if (!newline) {
        console.log(...Object.keys(text).flatMap(k => [k + ":", text[k]]));
    } else {
        for (const k in text) {
            console.log(k + ":", text[k]);
        }
    }
}