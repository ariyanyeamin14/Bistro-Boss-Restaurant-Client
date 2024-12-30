import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import PopularItems from '../PopularItems/PopularItems';
import FeaturedItem from '../FeaturedItem/FeaturedItem';
import Testimonials from '../Testimonials/Testimonials';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | Bistro Boss</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <PopularItems></PopularItems>
            <FeaturedItem></FeaturedItem>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;