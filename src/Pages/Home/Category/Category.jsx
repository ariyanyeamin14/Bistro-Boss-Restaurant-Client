import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import slide1 from "../../../assets/home/slide1.jpg"
import slide2 from "../../../assets/home/slide2.jpg"
import slide3 from "../../../assets/home/slide3.jpg"
import slide4 from "../../../assets/home/slide4.jpg"
import slide5 from "../../../assets/home/slide5.jpg"
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <div className='w-[70%] mx-auto my-20'>
            <SectionTitle
                subTitle={"From 11:00am to 10:00pm"}
                title={"ORDER ONLINE"}
            ></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img className='w-full' src={slide1} alt="" />
                    <h1 className='text-3xl font-cinzel text-center text-white -mt-14'>SALADS</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full' src={slide2} alt="" />
                    <h1 className='text-3xl font-cinzel text-center text-white -mt-14'>PIZZAS</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full' src={slide3} alt="" />
                    <h1 className='text-3xl font-cinzel text-center text-white -mt-14'>SOUPS</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full' src={slide4} alt="" />
                    <h1 className='text-3xl font-cinzel text-center text-white -mt-14'>DESERTS</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full' src={slide5} alt="" />
                    <h1 className='text-3xl font-cinzel text-center text-white -mt-14'>SALADS</h1>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Category;