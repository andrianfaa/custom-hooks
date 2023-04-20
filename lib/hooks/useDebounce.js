import { useEffect, useState } from "react";
/**
 * **useDebounce hook**
 * @param value the value to be debounced
 * @param delay delay debounce time (ex: 1000, 1000 = 1s, 500 = 0.5s, etc.)
 * @returns `value`
 */
const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(() => {
        const timeout = setTimeout(() => setDebouncedValue(value), delay || 500);
        return () => clearTimeout(timeout);
    }, [value, delay]);
    return debouncedValue;
};
export default useDebounce;
