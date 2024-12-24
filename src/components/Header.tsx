import BurgerMenu from "./BurgerMenu";
import NavLinks from "./NavLinks";

export default function Header() {
	return (
		<div className="sticky top-0 bg-white z-10 py-3 border-b border-black flex items-center justify-between w-full">
			<p className="title">Thomas Carfantan</p>
			<BurgerMenu className="md:hidden"/>
			<NavLinks className="hidden md:flex"/>
		</div>
	)
}
