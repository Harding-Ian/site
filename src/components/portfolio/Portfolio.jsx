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
        desc: "Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus numquam voluptatibus cumque maxime reiciendis, similique recusandae atque nemo, tempore voluptates dignissimos ipsam pariatur voluptatem. Omnis hic neque eveniet voluptatum et.",
        url: "https://www.youtube.com/"
    },
    {
        id: 2,
        title: "Temporary 2",
        img: p2,
        desc: "Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus numquam voluptatibus cumque maxime reiciendis, similique recusandae atque nemo, tempore voluptates dignissimos ipsam pariatur voluptatem. Omnis hic neque eveniet voluptatum et.",
        url: "https://www.youtube.com/"
    },
    {
        id: 3,
        title: "Temporary 3",
        img: p3,
        desc: "Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus numquam voluptatibus cumque maxime reiciendis, similique recusandae atque nemo, tempore voluptates dignissimos ipsam pariatur voluptatem. Omnis hic neque eveniet voluptatum et.",
        url: "https://www.youtube.com/"
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
                    <div className= "image-container" ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
                    <motion.div className="text-container" style={{y}}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <a className="bubble-button" href={item.url} target="_blank">
                            See More
                            <span></span><span></span><span></span><span></span>
                        </a>
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
                <h1 className="projects-header">Projects</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>
            {items.map((item, index) => (
                <Single item={item} key={item.id} isLast={index === items.length - 1} />
            ))}
        </div>
    );
};

export default Portfolio;

// const Portfolio = () => {
//     const ref1 = useRef();
//     const ref2 = useRef();
//     const ref3 = useRef();

//     const { scrollYProgress: scrollYProgress1 } = useScroll({ target: ref1 });
//     const { scrollYProgress: scrollYProgress2 } = useScroll({ target: ref2 });
//     const { scrollYProgress: scrollYProgress3 } = useScroll({ target: ref3 });

//     const y1 = useTransform(scrollYProgress1, [0, 1], [-100, 100]);
//     const y2 = useTransform(scrollYProgress2, [0, 1], [-100, 100]);
//     const y3 = useTransform(scrollYProgress3, [0, 1], [-100, 100]);

//     const scaleX = useSpring(scrollYProgress1, {
//         stiffness: 100,
//         damping: 30,
//     });

//     return (
//         <div className="portfolio">
//             <div className="progress">
//                 <h1 className="projects-header">Projects</h1>
//                 <motion.div style={{ scaleX }} className="progressBar"></motion.div>
//             </div>

//             {/* Project 1 */}
//             <section>
//                 <div className="item-container">
//                     <div className="item-wrapper">
//                         <div className="image-container" ref={ref1}>
//                             <img src={p1} alt="Temporary" />
//                         </div>
//                         <motion.div className="text-container" style={{ y: y1 }}>
//                             <h2>Temporary</h2>
//                             <p>Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus numquam voluptatibus cumque maxime reiciendis, similique recusandae atque nemo, tempore voluptates dignissimos ipsam pariatur voluptatem. Omnis hic neque eveniet voluptatum et.</p>
//                             <a className="bubble-button" href="https://www.youtube.com/" target="_blank">
//                                 See More
//                                 <span></span><span></span><span></span><span></span>
//                             </a>
//                         </motion.div>
//                     </div>
//                 </div>
//             </section>
//             <div className="horizontal-line"></div>

//             {/* Second Item */}
//             <section>
//                 <div className="item-container">
//                     <div className="item-wrapper">
//                         <div className="image-container" ref={ref2}>
//                             <img src={p2} alt="Temporary 2" />
//                         </div>
//                         <motion.div className="text-container" style={{ y: y2 }}>
//                             <h2>Temporary 2</h2>
//                             <p>Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus numquam voluptatibus cumque maxime reiciendis, similique recusandae atque nemo, tempore voluptates dignissimos ipsam pariatur voluptatem. Omnis hic neque eveniet voluptatum et.</p>
//                             <a className="bubble-button" href="https://www.youtube.com/" target="_blank">
//                                 See More
//                                 <span></span><span></span><span></span><span></span>
//                             </a>
//                         </motion.div>
//                     </div>
//                 </div>
//             </section>
//             <div className="horizontal-line"></div>

//             {/* Third Item */}
//             <section>
//                 <div className="item-container">
//                     <div className="item-wrapper">
//                         <div className="image-container" ref={ref3}>
//                             <img src={p3} alt="Temporary 3" />
//                         </div>
//                         <motion.div className="text-container" style={{ y: y3 }}>
//                             <h2>Temporary 3</h2>
//                             <p>Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus numquam voluptatibus cumque maxime reiciendis, similique recusandae atque nemo, tempore voluptates dignissimos ipsam pariatur voluptatem. Omnis hic neque eveniet voluptatum et.</p>
//                             <a className="bubble-button" href="https://www.youtube.com/" target="_blank">
//                                 See More
//                                 <span></span><span></span><span></span><span></span>
//                             </a>
//                         </motion.div>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default Portfolio;