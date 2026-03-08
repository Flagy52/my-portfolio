export default function SkillClass({ children }) {
    return (
        <span className="bg-[#0f172a] text-[#94a3b8] px-3 py-1 rounded text-sm border 
        border-[#334155] hover:shadow-xl hover:text-[#6366f1] transition-all hover:-translate-y-1 inline-block
        cursor-default">
            {children}
        </span>
    )
}