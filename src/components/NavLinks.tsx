export default function NavLinks({className} : {className?:string}) {
  return (
    <nav className={className + " bg-white flex justify-center gap-6 text-base "}>
        <a href="#about">about</a>
        <a href="#projects">projects</a>
        <a href="#skills">skills</a>
        <a href="#contact">contact</a>
    </nav>
  )
}
