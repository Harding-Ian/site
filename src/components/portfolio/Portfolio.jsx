import { useScroll, useSpring, motion, useTransform } from "framer-motion";
import { useRef } from 'react';
import "./portfolio.css";
import p1 from "../../assets/images/mountains.jpg";
import p2 from "../../assets/images/mountains.jpg";
import p3 from "../../assets/images/NightBackground.jpg";

const items = [
    {
        id: 1,
        title: "Temporary",
        img: p1,
        desc: "Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus numquam voluptatibus cumque maxime reiciendis, similique recusandae atque nemo, tempore voluptates dignissimos ipsam pariatur voluptatem. Omnis hic neque eveniet voluptatum et."
    },
    {
        id: 2,
        title: "Temporary 2",
        img: p2,
        desc: "Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus numquam voluptatibus cumque maxime reiciendis, similique recusandae atque nemo, tempore voluptates dignissimos ipsam pariatur voluptatem. Omnis hic neque eveniet voluptatum et."
    },
    {
        id: 3,
        title: "Temporary 3",
        img: p3,
        desc: "Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus numquam voluptatibus cumque maxime reiciendis, similique recusandae atque nemo, tempore voluptates dignissimos ipsam pariatur voluptatem. Omnis hic neque eveniet voluptatum et."
    },
];

const Single = ({ item, isLast }) => {

    const ref = useRef();
    
    const { scrollYProgress } = useScroll({
        target: ref,
    });

    const y = useTransform(scrollYProgress, [0,1], [-100, 100]);

    return (
        <section>
            <div className="item-container">
                <div className="item-wrapper">
                    <div image-container ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
                    <motion.div className="text-container" style={{y}}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button>See More</button>
                        <a href="https://twitter.com/Dave_Conner" class="btn btn-4"><span>Hover</span></a> 
                    </motion.div>
                </div>
            </div>
            {!isLast && <div className="horizontal-line"></div>}
        </section>
    );
};

const Portfolio = () => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"],
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });

    return (
        <div className="portfolio" ref={ref}>
            <div className="progress">
                <h1>Projects</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>
            {items.map((item, index) => (
                <Single item={item} key={item.id} isLast={index === items.length - 1} />
            ))}
        </div>
    );
};

export default Portfolio;