import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageCover from '../../../Shared/PageCover';
import pageCoverBg from '../../../assets/menu/banner3.jpg'
import useMenu from '../../../Hooks/useMenu';
import MenuSection from '../MenuSection/MenuSection';
import desertBg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaBg from '../../../assets/menu/pizza-bg.jpg'
import saladBg from '../../../assets/menu/salad-bg.jpg'
import soupBg from '../../../assets/menu/soup-bg.jpg'
import TodaysOffer from '../TodaysOffer/TodaysOffer';

const Menu = () => {
    const [menu] = useMenu()

    const offered = menu.filter(item => item.category === 'offered')
    const dessert = menu.filter(item => item.category === 'dessert')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')
    const pizza = menu.filter(item => item.category === 'pizza')
    return (
        <div>
            <Helmet>
                <title>Menu | Bistro Boss</title>
            </Helmet>
            <PageCover
                title="OUR MENU"
                subTitle="Would you like to try a dish?"
                img={pageCoverBg}
            ></PageCover>
            <TodaysOffer
                offered={offered}
            ></TodaysOffer>
            <MenuSection
                coverBg={desertBg}
                coverTitle="dessert"
                coverSubTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                items={dessert}
            ></MenuSection>
            <MenuSection
                coverBg={pizzaBg}
                coverTitle="pizza"
                coverSubTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                items={pizza}
            ></MenuSection>
            <MenuSection
                coverBg={saladBg}
                coverTitle="salad"
                coverSubTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                items={salad}
            ></MenuSection>
            <MenuSection
                coverBg={soupBg}
                coverTitle="soup"
                coverSubTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                items={soup}
            ></MenuSection>
        </div>
    );
};

export default Menu;