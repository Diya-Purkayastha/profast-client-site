import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import logo1 from   '../assets/brands/amazon.png'
import logo2 from   '../assets/brands/amazon_vector.png'
import logo3 from   '../assets/brands/casio.png'
import logo4 from   '../assets/brands/moonstar.png'
import logo5 from   '../assets/brands/randstad.png'
import logo6 from    '../assets/brands/start-people 1.png'
import logo7 from   '../assets/brands/start.png'

const logos = [
logo1, logo2, logo3, logo4, logo5, logo6, logo7  
];

const BrandLogos = () => {
  return (
    <section className="py-12 bg-base-100 mt-28">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-8">We've helped thousands of sales teams</h2>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={4000}
          breakpoints={{
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
        >
          {logos.map((logo, index) => (
            <SwiperSlide key={index}>
              <img
                src={logo}
                alt={`Client logo ${index + 1}`}
                className=" mx-auto  transition duration-300"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default BrandLogos;
