import { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

function ProjectCarousel({ screenshots, title }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto relative ">
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        pagination={{ 
          clickable: true,
          dynamicBullets: true
        }}
        loop={true}
        className="rounded-lg overflow-hidden"
      >
        {screenshots.map((screenshot, index) => (
          <SwiperSlide key={index}>
            <div className="relative pb-[56.25%] bg-[#0f172a] rounded-lg overflow-hidden">
              <picture>
                <source 
                  srcSet={screenshot.replace(/\.(png|jpg|jpeg)$/, '.webp')} 
                  type="image/webp" 
                />
                <img
                  src={screenshot}
                  alt={`${title} - скриншот ${index + 1}`}
                  loading="lazy"
                  className="absolute top-0 left-0 w-full h-full object-contain"
                />
              </picture>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      <button 
        ref={prevRef}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-[#1e293b]/80 hover:bg-[#6366f1] text-[#f1f5f9] w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 backdrop-blur-sm border border-[#334155]"
      >
        <FiChevronLeft size={20} />
      </button>
      <button 
        ref={nextRef}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-[#1e293b]/80 hover:bg-[#6366f1] text-[#f1f5f9] w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 backdrop-blur-sm border border-[#334155]"
      >
        <FiChevronRight size={20} />
      </button>
    </div>
  );
}

export default ProjectCarousel;