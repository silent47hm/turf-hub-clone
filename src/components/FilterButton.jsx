export default function FilterButton({children, active=false}){
return (
<button className={`px-4 py-2 rounded-full text-sm border ${active? 'bg-primary text-white border-primary' : 'bg-white text-gray-700 border-gray-200'}`}>
{children}
</button>
)
}