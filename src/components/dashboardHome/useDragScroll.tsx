import { useRef, useEffect } from 'react';

const useDragScroll = () => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ele = ref.current;
        if (!ele) return;

        let pos = { top: 0, left: 0, x: 0, y: 0 };

        const mouseDownHandler = (e: MouseEvent) => {
            ele.style.cursor = 'grabbing';
            ele.style.userSelect = 'none';

            pos = {
                left: ele.scrollLeft,
                top: ele.scrollTop,
                x: e.clientX,
                y: e.clientY,
            };

            document.addEventListener('mousemove', mouseMoveHandler);
            document.addEventListener('mouseup', mouseUpHandler);
        };

        const mouseMoveHandler = (e: MouseEvent) => {
            const dx = e.clientX - pos.x;
            const dy = e.clientY - pos.y;

            ele.scrollLeft = pos.left - dx;
            ele.scrollTop = pos.top - dy;
        };

        const mouseUpHandler = () => {
            ele.style.cursor = 'grab';
            ele.style.removeProperty('user-select');

            document.removeEventListener('mousemove', mouseMoveHandler);
            document.removeEventListener('mouseup', mouseUpHandler);
        };

        ele.addEventListener('mousedown', mouseDownHandler);

        return () => {
            ele.removeEventListener('mousedown', mouseDownHandler);
        };
    }, []);

    return ref;
};

export default useDragScroll;
