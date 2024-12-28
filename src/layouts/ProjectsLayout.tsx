import Footer from "../components/Footer";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
    const links = new Map<string, string>([
		['home', '/'],
		['scolaires', '/projects#scolaires'],
		['personnels', '/projects#perso'],
	  ]);
    
    return (
        <div className="px-6">
            <Header links={links}/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    )
}
