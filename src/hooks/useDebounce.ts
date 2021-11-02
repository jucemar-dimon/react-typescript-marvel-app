import { useRef } from "react";

export default function useDebounce(fn: any, delay: number) {
    const timeoutRef = useRef<number>(0);

    function debouncedFn(...args: any[]) {
        window.clearTimeout(timeoutRef.current);
        timeoutRef.current = window.setTimeout(() => {
            fn(...args);
            console.log("debouncedFn");
        }, delay);
    }

    return debouncedFn;
}
