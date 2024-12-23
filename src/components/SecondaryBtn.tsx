export default function SecondaryBtn({children} : {children:string}) {
  return (
    <div className="text-primary border border-primary py-2 px-8 w-fit h-fit rounded">
        {children}
    </div>
  )
}
