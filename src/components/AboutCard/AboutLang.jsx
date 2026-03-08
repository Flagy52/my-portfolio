export default function() {
    return (
        <div className="w-full md:w-1/2 md:ml-auto bg-[#1e293b] overflow-hidden p-6 rounded-lg border border-[#334155] hover:shadow-lg transition-shadow">
                <h3 className="text-3xl font-mono text-[#6366f1] mb-4 border-b border-[#334155] pb-2">
                    <span className="text-[#f1f5f9]">❯</span> Языки
                </h3>
                
                <div className="space-y-4">
                    <div className="flex justify-between items-center border-b border-[#334155] pb-3">
                    <div>
                        <p className="text-[#f1f5f9] font-mono text-lg">Русский</p>
                        <p className="text-[#94a3b8] text-sm">Родной</p>
                    </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                    <div>
                        <p className="text-[#f1f5f9] font-mono text-lg">Английский</p>
                        <p className="text-[#94a3b8] text-sm">Pre-Intermediate (A2/B1)</p>
                    </div>
                    </div>
                </div>
            </div>
    )
}