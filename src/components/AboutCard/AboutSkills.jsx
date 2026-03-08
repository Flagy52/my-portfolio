import SkillClass from "../SkillClass"
export default function() {
    let frontend = ['React', 'HTML', 'Tailwind', 'CSS', 'SASS']
    let tools = ['VS code', 'Git', 'Figma', 'Vite', 'Docker']
    let softSkills = ['Быстро учусь', 'Внимание к деталям', 'Тайм-менеджмент']

    return (
        <div className="w-full md:w-1/2 md:ml-auto bg-[#1e293b] overflow-hidden p-6 rounded-lg border border-[#334155] hover:shadow-lg transition-shadow">
            <h3 className="text-3xl font-mono text-[#6366f1] mb-4 border-b border-[#334155] pb-2">
              <span className="text-[#f1f5f9]">❯</span> Навыки
            </h3>
            
            <div className="space-y-4">
              <div>
                <p className="text-[#f1f5f9] font-mono text-sm mb-2">Frontend</p>
                <div className="flex flex-wrap gap-2">
                {frontend.map((skill, index) =>(
                    <SkillClass key={index}>{skill}</SkillClass>
                ))}
                </div>
              </div>
              
              <div>
                <p className="text-[#f1f5f9] font-mono text-sm mb-2">Инструменты</p>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool, index) => (
                    <SkillClass key={index}>{tool}</SkillClass>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-[#f1f5f9] font-mono text-sm mb-2">Soft skills</p>
                <div className="flex flex-wrap gap-2">
                    {softSkills.map((soft, index) => (
                        <SkillClass key={index}>{soft}</SkillClass>
                    ))}
                </div>
                </div>
            </div>
          </div>
    )
}