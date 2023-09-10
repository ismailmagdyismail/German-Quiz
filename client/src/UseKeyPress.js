import {useEffect} from "react";

function useKeyPress(targetKey, handler) {
    useEffect(() => {
        function handleKeyDown(event) {
            if (event.key === targetKey) {
                handler();
            }
        }
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);

    }, [targetKey, handler]);
}

export default useKeyPress;