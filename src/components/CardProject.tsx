import Button from "./Button";

export default function CardProject({
  id,
  children,
  description,
  keyWords,
}: {
  id: number;
  children: string;
  description: string;
  keyWords: Array<string>;
}) {
  return (
    <div className="bg-secondary px-6 py-4 flex flex-col gap-6 w-fit h-fit max-w-[350px] rounded-xl drop-shadow-md">
      <div className="flex flex-col gap-3 h-fit">
        <div className="title text-primary">{children}</div>
        <div className="text-black/50">{description}</div>
        <ul className="list-disc pl-6">
          {keyWords.map((keyWord, index) => (
            <li key={index}>{keyWord}</li>
          ))}
        </ul>
      </div>
      <div className="flex justify-end w-full items-center h-auto">
        <Button link={"/project/" + id} type="secondary">
          Voir
        </Button>
      </div>
    </div>
  );
}
