import { useEffect } from "react"

/* eslint-disable no-unused-vars */
const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title} - dragon news`;
    }, [title]);
}

export default useTitle;