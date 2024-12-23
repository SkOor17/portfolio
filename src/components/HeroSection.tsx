import PrimaryBtn from "./PrimaryBtn";

export default function HeroSection() {
  return (
    <div className="w-full min-h-[calc(100vh-61px)] flex flex-col items-center justify-between">
      <div className="flex flex-col gap-6 items-center h-full w-full justify-between py-6 md:flex-row md:w-3/4 md:pt-[15vh] md:items-start">
        <div>
          <p className="title">Bienvenue sur</p>
          <p className="title">mon portfolio</p>
        </div>
        <div className="w-3/4 flex justify-center md:w-fit">
          <img className="h-full md:max-h-[calc(65vh)] max-w-[calc(40vh)] rounded-lg" src="/assets/heroImg.jpg" alt="" />
        </div>
      </div>
      <div className="max-w-[calc(40vh)] w-full md:max-w-none md:w-3/4 pb-6 flex justify-end">
        <PrimaryBtn>Tout découvrir</PrimaryBtn>
      </div>
    </div>  
  )
}
