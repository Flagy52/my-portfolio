import { FaGithub, FaTelegram, FaMapPin, FaEnvelope } from 'react-icons/fa';
import Terminal from './Terminal';
import AnimatedSection from './Animation/AnimatedSection';


function Contact() {
  const contacts = [
    {
      icon: <FaGithub className="text-2xl" />,
      label: "GitHub",
      command: "git clone https://github.com/Flagy52",
      link: "https://github.com/Flagy52",
      color: "hover:text-[#333]"
    },
    {
      icon: <FaTelegram className="text-2xl" />,
      label: "Telegram",
      command: "t.me/flag_y",
      link: "https://t.me/flag_y",
      color: "hover:text-[#0088cc]"
    },
    {
      icon: <FaEnvelope className="text-2xl" />,
      label: "Email",
      command: "echo 'привет' | mail -s 'hello' den.sharov.20@bk.ru",
      link: "mailto:den.sharov.20@bk.ru",
      color: "hover:text-[#ea4335]"
    },
    {
      icon: <FaMapPin className="text-2xl" />,
      label: "Location",
      command: "pwd | grep 'Москва'",
      link: "#",
      color: "hover:text-[#ef4444]"
    },
  ];

  return (
    <AnimatedSection>
    <section id="contact" className="pb-20 bg-transporent">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-mono text-[#f1f5f9] mb-12">
          <span className="text-[#6366f1]">&gt;</span> contact
        </h2>
        
        <div className="bg-[#1e293b] rounded-lg p-6 font-mono border border-[#334155] max-w-2xl mx-auto">
          
          <Terminal>contact</Terminal>
          
          <div className="space-y-4">
            {contacts.map((contact, index) => (
              <div key={index} className="group">
                <div className="flex items-center text-[#22c55e] mb-1">
                  <span className="mr-2">$</span>
                  <span className="text-[#f1f5f9]">cat {contact.label.toLowerCase()}</span>
                </div>
                
                <a 
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 ml-5 text-[#94a3b8] hover:text-[#6366f1] transition-colors`}
                >
                  <span className="text-[#6366f1]">❯</span>
                  <span className="flex items-center gap-3">
                    {contact.icon}
                    <span className="text-sm">{contact.command}</span>
                  </span>
                </a>
              </div>
            ))}
          </div>

          
          
          <div className="mt-4 flex items-center">
              <span className="text-[#22c55e] mr-2">$</span>
              <span className="w-2 h-5 bg-[#6366f1] animate-pulse"></span>
          </div>
        </div>
      </div>
    </section>
    </AnimatedSection>
  );
}

export default Contact;