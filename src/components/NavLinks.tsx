import { Link } from "react-router-dom";

export default function NavLinks(
{className, links}: 
{className?:string, links:Map<string, string>}) 
{

  const style = "p-2 relative after:content-[''] after:block after:h-[1px] after:bg-black after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left"
  const linksName = Array.from(links.keys());
  const linksLink = Array.from(links.values()); 

  return (
    <nav className={className + " bg-white flex justify-center gap-4 text-base "}>
        {linksName.map((name, index) => (
          <Link key={index} to={linksLink[index]} className={style}>
            {name}
          </Link>
        ))}
    </nav>
  )
}
