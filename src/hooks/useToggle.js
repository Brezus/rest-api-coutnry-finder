import React, {useState} from "react";

export default function useToggle(defautValue) {
    const [value, setValue] = useState(defautValue)

    function toggleValue(value) {
        setValue(prevVal => {
            return typeof value === 'boolean' ? value : !prevVal 
        })
    }
    return [value, toggleValue]
}