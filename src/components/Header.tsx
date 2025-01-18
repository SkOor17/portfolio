import { Link } from "react-router-dom";
import BurgerMenu from "./BurgerMenu";
import NavLinks from "./NavLinks";

export default function Header(
{links}:
{links:Map<string, string>}
) {

	return (
		<div className="sticky top-0 bg-white z-10 py-3 px-6 border-b border-black flex items-center justify-between w-full">
			<Link to="/" className="title cursor-pointer">Thomas Carfantan</Link>
			<BurgerMenu links={links} className="md:hidden"/>
			<NavLinks links={links} className="hidden md:flex"/>
		</div>
	)
}
