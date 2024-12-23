import { Link } from "react-router-dom";

export default function NavLinks({className} : {className?:string}) {
  return (
    <nav className={className + " bg-white flex justify-center gap-6 text-base "}>
        <Link to="/#about">about</Link>
        <Link to="/#projects">projects</Link>
        <Link to="/#skills">skills</Link>
        <Link to="/#contact">contact</Link>
    </nav>
  )
}
