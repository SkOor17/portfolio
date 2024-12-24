import PrimaryBtn from "./PrimaryBtn";
import TextUnderline from "./TextUnderline";

export default function HeroSection() {
  return (
    <div id="hero" className="w-full min-h-[calc(100vh-61px)] flex flex-col items-center justify-between">
      <div className="flex flex-col gap-6 items-center h-full w-full justify-between py-6 md:flex-row md:w-3/4 md:pt-[10vh] md:items-start">
        <div className="md:text-6xl">
          <p className="title md:text-custom-l lg:text-custom-xl">Bienvenue sur</p>
          <div className="inline-flex">
            <p className="title md:text-custom-l lg:text-custom-xl">mon</p>
            <p className="title md:text-custom-l lg:text-custom-xl">
              <TextUnderline className="left-20">portfolio</TextUnderline>
            </p>
          </div>
        </div>
        <div className="w-3/4 flex justify-center md:w-fit">
          <img className="h-full md:max-h-[calc(60vh)] max-w-[calc(40vh)] rounded-lg" src="/assets/heroImg.jpg" alt="" />
        </div>
      </div>
      <div className="max-w-[calc(40vh)] w-full md:max-w-none md:w-3/4 pb-6 flex justify-end">
        <PrimaryBtn>Tout découvrir</PrimaryBtn>
      </div>
    </div>  
  )
}
