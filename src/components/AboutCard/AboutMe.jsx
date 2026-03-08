export default function AboutMe() {
    return (
        <div className="w-full md:w-1/2 bg-[#1e293b] overflow-hidden p-6 rounded-lg border border-[#334155] hover:shadow-lg transition-shadow">
            <h3 className="text-3xl font-mono text-[#6366f1] mb-4 border-b border-[#334155] pb-2">
              <span className="text-[#f1f5f9]">❯</span> Обо мне
            </h3>
            <p className="text-[#f1f5f9] font-mono text-xl mb-3">Привет, я Денис</p> 
            <p className="text-[#94a3b8] font-mono text-base leading-relaxed mb-4"> 
              Студент техникума, специальность — информационные системы. 
              В свободное от учёбы время изучаю React и современные подходы в веб-разработке. 
              Мой путь в IT начался с простого интереса к тому, как устроены сайты, 
              а превратился в желание строить карьеру в этой сфере.
            </p>
            <a 
              href="#contact" 
              className="inline-block text-[#94a3b8] font-mono text-sm hover:text-[#6366f1] underline underline-offset-2 transition-colors"
            >
              ⚡ Открыт к предложениям и сотрудничеству
            </a>
          </div>
    )
}