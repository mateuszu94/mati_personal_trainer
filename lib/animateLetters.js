import { motion } from "framer-motion"

const AnimateLetters = ({ letterClass, strArray, daley }) => {
    return (
        <span>
            {strArray.map((char, i) => (
                <motion.span
                    key={char + i}
                    className={`${letterClass}`}
                    animate={{
                        opacity: [0, 0.5, 1],
                    }}
                    transition={{
                        delay: daley,
                        duration: i / 4,
                        ease: "easeInOut",
                        times: [0, 0.5, 1],
                    }}
                >
                    {char}
                </motion.span>
            ))}
        </span>
    )
};
export default AnimateLetters
