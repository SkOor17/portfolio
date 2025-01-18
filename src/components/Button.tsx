import { Link } from "react-router-dom";

export default function Button(
{children, type, link}:
{children: string, type: "primary"|"secondary", link?: string}
) {

    const handleClick = () => {
        if (link && link.startsWith("#")) {
            const targetId = link.slice(1);
            const element = document.getElementById(targetId);
        
            if (element) {
                element.scrollIntoView({
                behavior: "smooth",
                block: "start",
                });
            }
        }
    };

    const baseStyles = "py-3 px-8 h-fit rounded"
    const primaryStyles = "bg-primary text-white hover:bg-[#b23d3f]"
    const secondaryStyles = "text-primary border border-primary hover:bg-primary hover:text-white transition-all duration-200"

    const buttonStyles = `${baseStyles} ${type === "primary" ? primaryStyles : secondaryStyles}`;

    return (
        <div className={`transition-transform transform hover:scale-105 py-3`}>
            <Link 
                onClick={link?.startsWith("#") ? handleClick : undefined} 
                to={!link ? "" : link} 
                className={buttonStyles}
                >
                {children}
            </Link>
        </div>
    )
}
