import { useState } from "react"
import NavIcon from "../assets/NavIcon"
import CrossIcon from "../assets/CrossIcon"
import NavLinks from "./NavLinks"

export default function BurgerMenu({className, links} : {className?:string, links:Map<string, string>}) {
    const [isActiv, setIsActiv] = useState(false) 

    const handleClick = () => {
        setIsActiv(!isActiv)
    }
  
    return (
    <div onClick={handleClick} className={className + " cursor-pointer"}>
        {!isActiv ?
            <NavIcon/>
            :
            <div>
                <CrossIcon/>
                <NavLinks links={links} className="absolute top-[61px] left-0 w-full border-b border-black py-5"/>
            </div>
        }
    </div>
  )
}
