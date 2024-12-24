import SecondaryBtn from "./SecondaryBtn"

export default function CardProject(
{id, children, description, keyWords }:
{id: number, children: string, description: string, keyWords: Array<string> }
) {
  return (
    <div className="bg-secondary px-6 py-4 flex flex-col gap-6 w-fit h-fit max-w-[350px] rounded-xl drop-shadow-md">
        <div className="flex flex-col gap-3">
            <div className="title text-primary">
                {children}
            </div>
            <div className="text-black/50">
                {description}
            </div>
            <ul className="list-disc pl-6">
                {keyWords.map((keyWord, index) => (
                    <li key={index}>{keyWord}</li>
                ))}
            </ul>
        </div>
        <div className="flex justify-end w-full">
            <SecondaryBtn link={"/project/"+id}>Voir</SecondaryBtn>
        </div>
    </div>
  )
}
