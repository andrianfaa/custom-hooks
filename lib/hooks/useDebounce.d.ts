/**
 * **useDebounce hook**
 * @param value the value to be debounced
 * @param delay delay debounce time (ex: 1000, 1000 = 1s, 500 = 0.5s, etc.)
 * @returns `value`
 */
declare const useDebounce: <T>(value: T, delay: number) => T;
export default useDebounce;
