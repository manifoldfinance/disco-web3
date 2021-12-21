export declare type Prefixed<K extends string, T> = `${K}${Extract<T, boolean | number | string>}`;
export declare type Index = (number | string) & Record<never, never>;
