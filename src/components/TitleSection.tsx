export default function TitleSection({children} : {children:string}) {
  return (
    <div className="flex gap-2 items-center">
        <svg 
            width="50" 
            height="2" 
            viewBox="0 0 50 2" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
        >
            <line 
                y1="0.55896" 
                x2="50" 
                y2="0.55896" 
                stroke="black"
            />
        </svg>

        <div className="title">
            {children}
        </div>        
    </div>
  )
}
