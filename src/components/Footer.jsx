function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#0f172a] border-t border-[#1e293b] py-8 z-999">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center text-[#94a3b8] font-mono text-sm">
          
          <div className="mb-4 md:mb-0">
            <span className="text-[#6366f1]">&gt;</span> {currentYear} flag_y
          </div>
          
          <div className="mb-4 md:mb-0">
            <span className="text-[#22c55e]">$</span> built with React & Tailwind
          </div>
          
          <div>
            <span className="text-[#6366f1]">❯</span> v1.0.0
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;