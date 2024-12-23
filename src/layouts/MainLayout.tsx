import { ReactElement } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function MainLayout({ children } :
{children : ReactElement}
) {
    return (
        <div>
            <Header/>
            <main>
                {children}
            </main>
            <Footer/>
        </div>
    )
}
