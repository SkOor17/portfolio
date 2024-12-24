import { skills } from "../data/datas";
import SkillBadge from "./SkillBadge";
import TitleSection from "./TitleSection";

export default function SkillsSection() {
  return (
    <div className="py-3 flex flex-col md:gap-6">
        <TitleSection>Skills.</TitleSection>
        <div className="flex flex-col gap-4 md:items-center">
            <p className="text-lg w-fit">Technical skills</p>
            <div className="w-full flex md:justify-center">
                <ul className="flex flex-wrap gap-3 max-w-[60vh] md:justify-center">
                    {skills.map((skill) => (
                        <li key={skill.id}>
                            <SkillBadge icon={skill.icon}>{skill.name}</SkillBadge>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
  )
}
