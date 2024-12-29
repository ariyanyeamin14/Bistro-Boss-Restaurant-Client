import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import PopularItems from '../PopularItems/PopularItems';
import FeaturedItem from '../FeaturedItem/FeaturedItem';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopularItems></PopularItems>
            <FeaturedItem></FeaturedItem>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;