export default function ProjectLinks({ project }) {
  let linkStyle = 'bg-[#0f172a] text-[#94a3b8] px-3 py-2 rounded text-sm hover:text-[#6366f1] transition-colors flex items-center gap-1'

  if (!project.linkDemo && !project.linkGithub && !project.linkFigma) {
    return (
      <div className="border-t border-[#334155] pt-6 mt-6">
        <h2 className="text-[#f1f5f9] font-mono text-lg mb-3">Ссылки на проект:</h2>
        <p className="text-[#94a3b8] text-sm">Ссылки временно недоступны</p>
      </div>
    );
  }

  return (
    <div className="border-t border-[#334155] pt-6 mt-6">
      <h2 className="text-[#f1f5f9] font-mono text-lg mb-3">Ссылки на проект:</h2>
      <div className="flex flex-wrap gap-3">
        
        {project.linkDemo && (
          <a 
            href={project.linkDemo} 
            className={linkStyle}
            target="_blank" 
            rel="noopener noreferrer"
          >
            Смотреть демо 👀
          </a>
        )}
        
        {project.linkGithub && (
          <a 
            href={project.linkGithub} 
            className={linkStyle}
            target="_blank" 
            rel="noopener noreferrer"
          >
            Смотреть Github 💻
          </a>
        )}
        
        {project.linkFigma && (
          <a 
            href={project.linkFigma} 
            className={linkStyle}
            target="_blank" 
            rel="noopener noreferrer"
          >
            Смотреть макет 🎨
          </a>
        )}
        
      </div>
    </div>
  );
}