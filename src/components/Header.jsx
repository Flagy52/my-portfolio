import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaGithub, FaTelegram, FaEnvelope } from 'react-icons/fa';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { title: '>_home', href: '/' },
    { title: '>_projects', href: '/projects' },
    { title: '>_about', href: '/about' },
  ];

  const socialLinks = [
    { icon: <FaTelegram />, href: 'https://t.me/flag_y', label: 'Telegram' },
    { icon: <FaGithub />, href: 'https://github.com/Flagy52', label: 'GitHub' },
    { icon: <FaEnvelope />, href: 'mailto:den.sharov.20@bk.ru', label: 'LinkedIn' },
  ];

  return (
    <header className="bg-[#0f172a] border-b border-[#1e293b] fixed w-full z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          <div className="flex-shrink-0">
            <span className="text-[#f1f5f9] font-mono text-lg">
              <span className="text-[#6366f1]">&gt;</span> Flag_y
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="text-[#94a3b8] hover:text-[#6366f1] font-mono transition-colors"
              >
                {item.title}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#94a3b8] hover:text-[#6366f1] text-xl transition-colors"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#f1f5f9] text-2xl"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 border-t border-[#1e293b]">
            <div className="flex flex-col space-y-3 mb-4">
              {menuItems.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="text-[#94a3b8] hover:text-[#6366f1] font-mono py-2 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </a>
              ))}
            </div>

            <div className="flex space-x-4 pt-4 border-t border-[#1e293b]">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#94a3b8] hover:text-[#6366f1] text-xl transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;