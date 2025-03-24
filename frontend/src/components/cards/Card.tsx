
interface CardProps{
    children:React.ReactNode,
    className:string
}
const Card:React.FC<CardProps>=({children,className=''})=>{
 return(
    <div className={`${className} border rounded-lg border-gray-300 shadow-lg p-4 `} >
        {children}
    </div>
 )
}

export default Card