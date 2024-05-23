import {motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Parallax(){
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    //scrollYProgress ranges from 0 to 1. Want to map that to a percentage
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "-120%"]);
    //const textY = useTransform(scrollYProgress, [0, 1], ["-85%", "140%"]);
    const foregroundY = useTransform(scrollYProgress, [0,1], ["0%", "-70%"]);
    const textOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);


    return (
        <div ref={ref} className="parallax-wrapper">
            <motion.h1 style={{ opacity: textOpacity}} className="parallax-text">Ian Harding</motion.h1>
            <motion.div style={{ y: backgroundY }}className="background-parallax"></motion.div>
            <motion.div style = {{ y: foregroundY }} className="foreground-parallax"></motion.div>
        </div>
        
    );
}