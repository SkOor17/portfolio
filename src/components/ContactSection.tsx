import { Link } from "react-router-dom";
import TitleSection from "./TitleSection";
import GithubIcon from "../assets/GithubIcon";
import LinkedinIcon from "../assets/LinkedinIcon";
import PhoneIcon from "../assets/PhoneIcon";
import EmailIcon from "../assets/EmailIcon";

export default function ContactSection() {
  return (
    <div id="contact" className="py-3 pb-6 flex flex-col gap-6 scroll-mt-16">
        <TitleSection>Contact.</TitleSection>
        <div className="flex flex-col gap-2 w-full md:gap-6 md:flex-row md:justify-center">
            <div className="flex flex-col gap-2">
                <div className="w-fit flex gap-2 items-center">
                    <EmailIcon/>
                    <p>tcarfantan11@gmail.com</p>
                </div>
                <div className="w-fit flex gap-2 items-center">
                    <PhoneIcon/>
                    <p>07 80 34 02 89</p>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <Link 
                    to="https://github.com/SkOor17" 
                    className="w-fit flex gap-2 items-center "
                >
                    <GithubIcon/>
                    <p className="relative after:content-[''] after:block after:h-[1px] after:bg-black after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left">
                        Github
                    </p>
                </Link>
                <Link 
                    to="https://www.linkedin.com/in/thomas-carfantan-529585329/" 
                    className="w-fit flex gap-2 items-center"
                >
                    <LinkedinIcon/>
                    <p className="relative after:content-[''] after:block after:h-[1px] after:bg-black after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left">
                        Linkedin
                    </p>
                </Link>
            </div>
        </div>
    </div>
  )
}
