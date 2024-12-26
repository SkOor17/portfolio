import { motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0},
  animate: { opacity: 1},
  exit: { opacity: 0},
};

const transitionSettings = { duration: 0.25, ease: "easeInOut" };

export default function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={transitionSettings}
    >
      {children}
    </motion.div>
  );
}
