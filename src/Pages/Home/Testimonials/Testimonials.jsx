import React, { useEffect, useRef, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';
import { BiSolidQuoteSingleLeft } from 'react-icons/bi';
import { ImQuotesLeft } from 'react-icons/im';

const Testimonials = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://bistro-boss-restaurant-server-peach-beta.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className='my-24 w-[70%] mx-auto'>
            <SectionTitle
                title='TESTIMONIALS'
                subTitle='What Our Clients Say'
            ></SectionTitle>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
            >
                {
                    reviews.map(review =>
                        <SwiperSlide key={review._id}>
                            <div className='px-20 py-10 flex flex-col items-center'>
                                <Rating readOnly style={{ maxWidth: 250 }} value={review.rating} />
                                <ImQuotesLeft size={150} />
                                <p className='text-xl my-8 '>{review.details}</p>
                                <h3 className='text-3xl font-medium uppercase text-orange-400'>{review.name}</h3>
                            </div>
                        </SwiperSlide>)
                }
                <div className="autoplay-progress" slot="container-end">
                    <svg ref={progressCircle}>

                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </div>
    );
};

export default Testimonials;