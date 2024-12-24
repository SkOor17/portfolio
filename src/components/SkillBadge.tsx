import { ReactElement } from "react";

export default function SkillBadge(
{icon, children}:
{icon: ReactElement, children: string}
) {
  return (
    <div className="flex gap-2 px-4 py-2 border border-black rounded items-center w-fit">
        {icon}
        <div> {children} </div>
    </div>
  )
}
