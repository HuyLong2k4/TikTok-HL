// xử lý việc khi gõ xong sau 500ms thì fetch mới bắn yêu cầu tới máy chủ

import { useState, useEffect } from "react";

function useDebounce (value, delay) {
    const [debounceValue, setDebounceValue] = useState(value);
    
    useEffect(() => {
        const handler = setTimeout(() => setDebounceValue(value), delay)

        return () => clearTimeout(handler);
    }, [value])

    return debounceValue
}

export default useDebounce