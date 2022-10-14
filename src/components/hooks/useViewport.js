import { useEffect, useState } from "react";

export const useViewport = () => {
    const[windowWidth, setWindowwidth] = useState(window.innerWidth || document.documentElement.clientWidth);

    useEffect(()=> {
        const handleWindowWith = () => {
            const width = window.innerWidth || document.documentElement.clientWidth;
            setWindowwidth(width);
        }
        handleWindowWith();
        window.addEventListener('resize', handleWindowWith);
        return () => window.removeEventListener('resize', handleWindowWith);
    },[]);
    return [windowWidth];
}