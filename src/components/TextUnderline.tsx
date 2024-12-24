import { motion } from "motion/react";

export default function TextUnderline({ children, className, spacing, size}:
{children: string, className?: string, spacing?: string, size?: "xl"}
) {

    let res;

    switch (size) {
        case "xl":
            res = 
            <span className={`relative ${spacing ? `ml-${spacing}` : "ml-2"}`}>

                {children}
                <svg width="131" height="15" viewBox="0 0 131 15" fill="none" xmlns="http://www.w3.org/2000/svg"
                    className={className + " absolute"}
                >
                    <motion.path 
                        initial={{pathLength: 0}}
                        whileInView={{pathLength: 1}}
                        transition={{
                            duration: 0.75,
                            ease: "easeInOut",
                        }} 
                        d="M1 12.6623C12.3973 11.6481 41.6028 3.63666 47.3015 10.127C54.4248 18.2399 67.2467 5.05643 87.9043 10.127C97.3322 12.4411 98.0008 15.9437 109.987 12.6623C119.247 10.127 133.493 4.54939 129.219 1" 
                        stroke="#DF0B0B"
                    />
                </svg>

            </span>

            break;
    
        default:
            res = 
            <span className={`relative ${spacing ? `ml-${spacing}` : "ml-2"}`}>
                {children}

                <svg 
                    width="70" 
                    height="14" 
                    viewBox="0 0 93 14" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className={className + " absolute"}
                >
                    <motion.path
                        initial={{pathLength: 0}}
                        whileInView={{pathLength: 1}}
                        transition={{
                            duration: 0.75,
                            ease: "easeInOut",
                        }} 
                        d="M1 12.1789C9 11.1789 29.5 3.27887 33.5 9.67887C38.5 17.6789 47.5 4.67887 62 9.67887C68.6176 11.9608 69.0869 15.4146 77.5 12.1789C84 9.67887 94 4.17889 91 0.678894" 
                        stroke="#DF0B0B"
                    />
                </svg>
            </span>
            break;
    }

    return (
        <>
            {res}
        </>
    )
}
