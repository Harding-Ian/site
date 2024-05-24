import { useScroll, useSpring, motion } from "framer-motion";
import { useRef } from 'react';
import "./portfolio.css";

const items = [
    {
        id: 1,
        title: "Temporary",
        img: "../../assets/images/mountains.jpg",
        desc: "Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus numquam voluptatibus cumque maxime reiciendis, similique recusandae atque nemo, tempore voluptates dignissimos ipsam pariatur voluptatem. Omnis hic neque eveniet voluptatum et."
    },
    {
        id: 2,
        title: "Temporary 2",
        img: "../../assets/images/menu.svg",
        desc: "Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus numquam voluptatibus cumque maxime reiciendis, similique recusandae atque nemo, tempore voluptates dignissimos ipsam pariatur voluptatem. Omnis hic neque eveniet voluptatum et."
    },
    {
        id: 3,
        title: "Temporary 3",
        img: "../../assets/images/NightBackground.jpg",
        desc: "Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus numquam voluptatibus cumque maxime reiciendis, similique recusandae atque nemo, tempore voluptates dignissimos ipsam pariatur voluptatem. Omnis hic neque eveniet voluptatum et."
    },
];

const Single = ({ item }) => {
    return (
        <section>
            {item.title}
        </section>
    );
}

const Portfolio = () => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"],
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });

    return (
        <div className="portfolio" ref={ref}>
            <h1>Projects</h1>
            <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            {items.map(item => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    );
};

export default Portfolio;