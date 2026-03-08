export default function Terminal({children}) {
    const circleClasses = "w-3 h-3 rounded-full hover:opacity-70 transition-opacity duration-200 ease-in-out"
    return (
        <div className="flex items-center space-x-2 mb-6">
            <div className={`${circleClasses} bg-red-500`}></div>
            <div className={`${circleClasses} bg-yellow-500`}></div>
            <div className={`${circleClasses} bg-green-500`}></div>
            <span className="text-[#64748b] text-sm ml-2">~/{children}</span>
          </div>
    )
}