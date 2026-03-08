import { useInView } from 'react-intersection-observer';

export default function AnimatedSection({ children, className = '', delay = 0 }) {
  const [ref, inView] = useInView({
    triggerOnce: true, 
    threshold: 0.2,    
    rootMargin: '0px',
  });

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${
        inView 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-20'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}