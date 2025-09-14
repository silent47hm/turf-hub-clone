export default function IconButton({children, className=''}){
return (
<button className={`w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center ${className}`}>
{children}
</button>
)
}