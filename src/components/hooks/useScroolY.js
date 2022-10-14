import { useEffect, useState } from "react";

export function useScrollY(){
    const [scrollY, setscrollY] = useState(0);

    const handleScrollY = () => {
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        setscrollY(scrollY);
    }

    useEffect(() =>{
        handleScrollY();
        window.addEventListener('scroll',handleScrollY);
        return () => {
            window.removeEventListener('scroll',handleScrollY);
        }
    },[]);
    return ([scrollY]);
}