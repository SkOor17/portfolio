import { motion } from "motion/react";

export default function TextUnderline({ children, className, spacing }:
{children: string, className?: string, spacing?: string}
) {
  return (
    <>
    <span className={`relative ${spacing ? `ml-${spacing}` : "ml-2"}`}>
        {children}

        <svg 
            width="70" 
            height="14" 
            viewBox="0 0 93 14" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className={className}
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
    </>
  )
}
