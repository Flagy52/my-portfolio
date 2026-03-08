import { useParams, useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';
import ProjectCarousel from '../components/ProjectCarousel';
import ProjectLinks from '../components/ProjectLinks';
import MotionSection from '../components/Animation/MotionSection';
import SkillClass from '../components/SkillClass';

function ProjectPage() {
  const { id } = useParams();
  const navigate = useNavigate(); 
  
  const project = projects.find(p => p.id === Number(id));

  const isLight = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 128;
  };
  
  if (!project) {
    return (
      <div className="min-h-screen bg-[#0f172a] pt-16">
        <div className="container mx-auto px-4 py-8 text-center">
          <p className="text-[#94a3b8] text-xl mb-4">Проект не найден 😕</p>
          <button 
            onClick={() => navigate('/')}
            className="text-[#6366f1] hover:text-[#4f52e0] font-mono"
          >
            ← Вернуться на главную
          </button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-[#0f172a] pt-16">
      <div className="container mx-auto px-4 py-8">
        

        <button 
          onClick={() => navigate(-1)} 
          className="text-[#94a3b8] hover:text-[#6366f1] font-mono mb-6 flex items-center gap-2 transition-colors"
        >
          ← назад
        </button>
        
        {project.screenshots && project.screenshots.length > 0 && (
            <div className="mb-8">
              <MotionSection motionClass='motion-preset-slide-up'><ProjectCarousel screenshots={project.screenshots} title={project.title} /></MotionSection>
            </div>
          )}
        <MotionSection motionClass='motion-preset-slide-up'>
        <div className="bg-[#1e293b] p-8 rounded-lg border border-[#334155]">
          <h1 className="text-[#f1f5f9] font-mono sm:text-2xl md:text-3xl mb-4">
            {project.title}
          </h1>
          
          <p className="text-[#94a3b8] mb-6">
            {project.description}
          </p>

          <div className="border-t border-[#334155] pt-6">
            <h2 className="text-[#f1f5f9] font-mono text-lg mb-3">Описание:</h2>
            <div className="text-[#94a3b8] flex flex-wrap gap-2">
              {project.fullDescription}
            </div>
          </div>
          {project.colors && project.colors.length > 0 && (
            <div className="border-t border-[#334155] pt-6 mt-6">
              <h2 className="text-[#f1f5f9] font-mono text-lg mb-3">Фирменные цвета:</h2>
              <div className="flex flex-wrap gap-2">
                {project.colors.map((color, index) => (
                  <span 
                    key={index} 
                    className={`px-3 py-1 rounded text-sm ${isLight(color) ? 'text-black' : 'text-white'} 
                    hover:shadow-x1 transition-all hover:-translate-y-0.5 inline-block cursor-default`}
                    style={{ backgroundColor: color }}
                  >
                    {color}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          
          <div className="border-t border-[#334155] pt-6 mt-6">
            <h2 className="text-[#f1f5f9] font-mono text-lg mb-3">Технологии:</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <SkillClass key={index}>{tech}</SkillClass>
              ))}
            </div>
          </div>

          <ProjectLinks project={project} />

        </div>
        </MotionSection>
      </div>
    </div>
  );
}

export default ProjectPage;