import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// INTERFACES
import { ICarousel, ICarouselItem } from '@interfaces/carousel.interface';

// STYLES
import { CarouselTitle, CarouselItems, CarouselItem } from './styles';

const Carousel = ({ id, name, slug, items }: ICarousel) => {
    return (
        <React.Fragment>
            <CarouselTitle>{name}</CarouselTitle>
            <CarouselItems>
                <Swiper slidesPerView={4} spaceBetween={20} modules={[Pagination]} centeredSlides={false} className="mySwiper" grabCursor pagination>
                    {items.map((item: ICarouselItem, idx: number) => (
                        <SwiperSlide key={`carousel-${idx}`}>
                            <CarouselItem>{item.title}</CarouselItem>  
                        </SwiperSlide>
                    ))}
                </Swiper>
            </CarouselItems>
        </React.Fragment>
    );
};

export default Carousel;
