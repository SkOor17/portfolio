import Footer from "../components/Footer";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
    const links = new Map<string, string>([
		['about', '/#about'],
		['projects', '/#projects'],
		['skills', '/#skills'],
		['contact', '/#contact'],
	  ]);
    
    return (
        <div>
            <Header links={links}/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    )
}
