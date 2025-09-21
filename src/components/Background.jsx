export default function Background({children }){
  return (
    <div className="flex flex-col items-center p-6">
        <div className="bg-[#504538] rounded-2xl shadow-xl p-8 max-w-7xl w-full ">
            {children }
        </div>
    </div>
        );
}