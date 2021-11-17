import React, { useEffect, useState} from "react";

// Debouncing is used to cut down on API calls
export function useDebounce(value, timeout, callback) {

    // store timer variable on state
    const [timer, setTimer] = useState(null);

    // subfunction to check for a current timer variable, and if present clear it
    const clearTimer = () => {
        if (timer)
            clearTimeout(timer)
    }

    // effect that runs any time the provided value is modified 
    useEffect(() => {

        // when the value is modified, clear the current timer
        clearTimer();

        // if we have been provided a value and a callback, then 
        if(value && callback) {

            // set the state to the new timeout duration provided by user
            const newTimer = setTimeout(callback, timeout);
            setTimer(newTimer);
        }
    }, [value])

}