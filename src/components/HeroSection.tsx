import { motion } from "motion/react";
import Button from "./Button";
import TextUnderline from "./TextUnderline";

export default function HeroSection() {
  return (
    <div
      id="hero"
      className="w-full pb-4 min-h-[calc(100vh-61px)] flex flex-col items-center justify-between"
    >
      <div className="flex flex-col gap-6 items-center h-full w-full justify-between py-6 xl:flex-row xl:w-3/4 xl:pt-[10vh] xl:items-start">
        <div>
          <p className="!text-custom-xl title">Bienvenue sur</p>
          <div className="inline-flex">
            <p className="title !text-custom-xl">mon</p>
            <p className="title !text-custom-xl">
              <TextUnderline size="xl" className="left-4 top-12">
                portfolio
              </TextUnderline>
            </p>
          </div>
        </div>
        <motion.div 
          className="w-3/4 flex justify-center xl:w-fit"
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          viewport={{ once: true }}
          transition={{
              duration: 0.75,
              ease: "easeInOut",
          }}
        >
          <img
            className="h-full xl:max-h-[calc(60vh)] max-w-[calc(40vh)] rounded-lg"
            src="/assets/heroImg.jpg"
            alt=""
          />
        </motion.div>
      </div>
      <div className="max-w-[calc(40vh)] w-full xl:max-w-none xl:w-3/4 pb-6 flex justify-end items-center">
        <Button link="/#about" type="primary">
          About me
        </Button>
      </div>
    </div>
  );
}
