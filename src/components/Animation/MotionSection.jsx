import { useInView } from 'react-intersection-observer';

export default function MotionSection({ children, motionClass = 'motion-preset-slide-left', threshold = 0.1 }) {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: threshold,
  });

   return (
    <div
      ref={ref}
      className={inView ? motionClass : 'motion-preset-fade-out'}
      style={{
        transition: 'all 0.5s ease-out',
        opacity: inView ? 1 : 0
      }}
    >
      {children}
    </div>
  );
}