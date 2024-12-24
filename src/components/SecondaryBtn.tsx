import { Link } from "react-router-dom";

export default function SecondaryBtn({children, link} : {children:string, link?: string}) {
  
  return (
    <Link to={!link ? "" : link} className="text-primary border border-primary py-2 px-8 w-fit h-fit rounded cursor-pointer">
        {children}
    </Link>
  )
}
