import React, { useState, useEffect, useRef } from 'react'
import { animate, useMotionValue, useTransform, motion } from 'framer-motion'


const Counter = ({ from, to, duration }) => {
    const count = useMotionValue(from);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const [isInView, setIsInView] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                } else {
                    setIsInView(false);
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    useEffect(() => {
        if (isInView) {
            const controls = animate(count, to, { duration: duration });
            return controls.stop;
        }
    }, [isInView]);

    return <motion.p ref={ref}>{rounded}</motion.p>;
};

export default Counter