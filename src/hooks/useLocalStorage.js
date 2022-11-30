import { useState } from 'react'


// helps us maintain users login status even on page refresh
export const useLocalStorage = (keyName, defaultValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const value = window.localStorage.getItem(keyName);

            if (value) {
                return JSON.parse(value);
            } else {
                window.localStorage.setItem(keyName, JSON.stringify(defaultValue));

                return defaultValue;
            }
            } catch (err) {
                return defaultValue;
            }
    });

    const setValue = (newValue) => {
        try {
            window.localStorage.setItem(keyName, JSON.stringify(newValue));
        } catch(err) {}
        setStoredValue(newValue);
    };

    return [storedValue, setValue]
}