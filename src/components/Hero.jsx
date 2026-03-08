import { TypeAnimation } from 'react-type-animation';
import { FiArrowDown } from 'react-icons/fi';
import Terminal from './Terminal';
import AnimatedSection from './Animation/AnimatedSection';

function Hero() {
  return (
    <AnimatedSection>
    <section className="min-h-screen bg-transporent flex items-center justify-center pt-16 fade-in-up ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto">
          
          <div className="bg-[#1e293b] rounded-lg p-6 font-mono border border-[#334155] shadow-2xl">
            
            <Terminal>portfolio</Terminal>
            
            <div className="space-y-4">
              
              <div>
                <div className="flex items-center space-x-2">
                  <span className="text-[#22c55e]">$</span>
                  <span className="text-[#f1f5f9]">whoami</span>
                </div>
                <div className="text-[#f1f5f9] ml-6 mt-1">
                  <span className="text-[#6366f1]">❯</span> flag_y
                </div>
              </div>
              
              <div>
                <div className="flex items-center">
                  <span className="text-[#22c55e] mr-2">$</span>
                  <span className="text-[#f1f5f9]">echo $ROLE</span>
                </div>
                <div className="text-[#f1f5f9] ml-6 mt-1">
                  <span className="text-[#6366f1]">❯</span>{' '}
                  <TypeAnimation
                    sequence={[
                      'Frontend Developer',
                      2000,
                      'React Developer',
                      2000,
                      'Junior Developer',
                      2000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    className="text-[#f1f5f9]"
                  />
                </div>
              </div>
              
              <div>
                <div className="flex items-center">
                  <span className="text-[#22c55e] mr-2">$</span>
                  <span className="text-[#f1f5f9]">cat status.txt</span>
                </div>
                <div className="text-[#94a3b8] ml-6 mt-1">
                  <span className="text-[#6366f1]">❯</span> Open to work
                </div>
              </div>
              
              <div>
                <div className="flex items-center">
                  <span className="text-[#22c5be] mr-2">✨</span>
                  <span className="text-[#f1f5f9]">готов к новым проектам</span>
                </div>
              </div>
              
            </div>
            
            <div className="mt-4 flex items-center">
              <span className="text-[#22c55e] mr-2">$</span>
              <span className="w-2 h-5 bg-[#6366f1] animate-pulse"></span>
            </div>
          </div>
          
          <div className="flex justify-center mt-12">
            <a
              href="#projects"
              className="text-[#94a3b8] hover:text-[#6366f1] transition-colors animate-bounce"
            >
              <FiArrowDown size={32} />
            </a>
          </div>
          
        </div>
      </div>
    </section>
    </AnimatedSection>
  );
}

export default Hero;