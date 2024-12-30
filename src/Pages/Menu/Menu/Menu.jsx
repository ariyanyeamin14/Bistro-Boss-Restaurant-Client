import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageCover from '../../../Shared/PageCover';
import pageCoverBg from '../../../assets/menu/banner3.jpg'
import MenuItem from '../../../Shared/MenuItem';

const Menu = () => {
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
        </div>
    );
};

export default Menu;