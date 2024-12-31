import { useState } from "react";
import { skills } from "../data/datas";
import SkillBadge from "./SkillBadge";
import TitleSection from "./TitleSection";

export default function SkillsSection() {
    const [hoveredSkill, setHoveredSkill] = useState(0)

    return (
        <div id="skills" className="py-3 flex flex-col gap-6 scroll-mt-16">
            <TitleSection>Skills.</TitleSection>
            <div className="flex flex-col gap-4 md:items-center">
                <p className="text-lg w-fit">Technical skills</p>
                <div className="w-full flex md:justify-center">
                    <ul className="flex flex-wrap gap-3 max-w-[60vh] md:justify-center">
                        {skills.map((skill, index) => (
                            <li 
                                key={index}
                                onMouseEnter={() => setHoveredSkill(skill.id)}
                                onMouseLeave={() => setHoveredSkill(0)}
                                className={`transition-opacity duration-300 ${hoveredSkill && hoveredSkill !== skill.id ? "opacity-50" : "opacity-100"}`}
                            >
                                <SkillBadge icon={skill.icon}>{skill.name}</SkillBadge>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
