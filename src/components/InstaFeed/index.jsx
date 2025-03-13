import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import pub1 from "@/assets/images/instaFeed/entrega-sofa.png";
import pub2 from "@/assets/images/instaFeed/entrega-mesa.png";
import pub3 from "@/assets/images/instaFeed/entrega-sofa2.png";
import pub4 from "@/assets/images/instaFeed/italo-felipe.png";

const fallAnimation = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const FallingImage = ({ src, className }) => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

    return (
        <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={fallAnimation} className={className}>
            <Image className="object-cover rounded-lg" width={600} src={src} alt="Publicação instagram Impacto Móveis" />
        </motion.div>
    );
};

const InstaFeed = () => {
    return (
        <div className="flex flex-col items-center w-full">
            <div className="mt-12">
                <h2 className="text-2xl lg:text-3xl xl:text-4xl text-gold font-semibold">- Siga no Instagram -</h2>
            </div>

            <div className="flex flex-col gap-20 items-center p-4 md:p-4 max-w-[90%] rounded-3xl">
                <a
                    href="https://www.instagram.com/impactomoveis_/"
                    target="_blank"
                    className="flex w-32 gap-2 m-4 md:m-0 text-white text-sm border border-white bg-red-700 hover:bg-red-800 justify-center items-center text-blue-default rounded-md py-2 hover:shadow-lg hover:shadow-blue-default hover:scale-105 transition-all duration-200"
                >
                    <i className="fa-brands fa-instagram"></i> Seguir
                </a>

                <div className="grid grid-cols-1 gap-3 md:gap-6 md:grid-cols-2 xl:grid-cols-4">
                    <FallingImage src={pub1} className="lg:pt-20" />
                    <FallingImage src={pub2} />
                    <FallingImage src={pub3} />
                    <FallingImage src={pub4} className="hidden md:block lg:pt-20" />
                </div>
            </div>
        </div>
    );
};

export default InstaFeed;
