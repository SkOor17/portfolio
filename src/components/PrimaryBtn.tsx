export default function PrimaryBtn({children} : {children:string}) {
  return (
    <div className="bg-primary text-white py-2 px-8 w-fit h-fit rounded">
        {children}
    </div>
  )
}
