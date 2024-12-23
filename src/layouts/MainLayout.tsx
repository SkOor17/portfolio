import { ReactElement } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function MainLayout({ children } :
{children : ReactElement}
) {
    return (
        <div className="px-6">
            <Header/>
            <main>
                {children}
            </main>
            <Footer/>
        </div>
    )
}
