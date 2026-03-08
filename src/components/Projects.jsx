import { projects } from '../data/projects';
import { Link } from 'react-router-dom';
import AnimatedSection from './Animation/AnimatedSection';

export default function Project() {
    return (
    <AnimatedSection>
    <section id="projects" className="py-20 bg-transporent">
        <div className="container mx-auto px-4">
        <h2 className="text-3xl font-mono text-[#f1f5f9] mb-12">
          <span className="text-[#6366f1]">&gt;</span> projects
        </h2>
        
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {projects.map((project) => (
            <div key={project.id} className="bg-[#1e293b] overflow-hidden md:p-4 rounded-lg border border-[#334155]
             hover:shadow-xl transition-all hover:-translate-y-1">

                {project.screenshots && project.screenshots.length > 0 && (
                <div className="w-full md:mb-4">
                <div className="relative pb-[60.25%] overflow-hidden rounded-lg bg-[#0f172a]">
                  <picture>
                    <source 
                      srcSet={project.screenshots[0].replace(/\.(png|jpg|jpeg)$/, '.webp')} 
                      type="image/webp" 
                    />
                    <img 
                      src={project.screenshots[0]}
                      alt={project.title}
                      loading="lazy"
                      className="absolute top-0 left-0 w-full h-full object-cover hover:scale-102 transition-transform duration-300"
                    />
                  </picture>
                </div>
              </div>
              )}
                <div className="px-4 md:px-0 pb-4 md:pb-0 pt-4 md:pt-0">
                <h3 className="text-xl font-mono text-[#f1f5f9] mb-2">
                    {project.title}
                </h3>
                <p className="text-[#94a3b8] font-mono text-sm mb-4">
                    {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                    <span 
                        key={index}
                        className="text-xs font-mono bg-[#0f172a] text-[#6366f1] px-2 py-1 rounded"
                    >
                        {tech}
                    </span>
                    ))}
                </div>
                
                <Link 
                    to={project.link}
                    className="inline-flex items-center gap-2 bg-[#6366f1] text-white
                    font-mono text-sm px-6 py-3 rounded-lg hover:bg-[#4f52e0] transition-all"
                    >
                    Подробнее
                </Link>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </AnimatedSection>
    )
}