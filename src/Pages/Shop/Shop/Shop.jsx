import React, { useState } from 'react';
import PageCover from '../../../Shared/PageCover';
import shopBg from '../../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../Hooks/useMenu';
import CardLayout from '../CardLayout/CardLayout';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Shop = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
    const { category } = useParams()
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex);

    console.log(category)
    const [menu] = useMenu()
    const drinks = menu.filter(item => item.category === 'drinks')
    const dessert = menu.filter(item => item.category === 'dessert')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')
    const pizza = menu.filter(item => item.category === 'pizza')
    return (
        <div>
            <Helmet>
                <title>Shop | Bistro Boss</title>
            </Helmet>
            <PageCover
                img={shopBg}
                title="OUR SHOP"
                subTitle="WOULD YOU LIKE TO TRY A DISH?"
            ></PageCover>
            <div className='w-[70%] mx-auto my-20'>
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <div className='mx-auto text-center'>
                        <TabList>
                            <Tab>SALAD</Tab>
                            <Tab>PIZZA</Tab>
                            <Tab>SOUPS</Tab>
                            <Tab>DESSERTS</Tab>
                            <Tab>DRINKS</Tab>
                        </TabList>
                    </div>
                    <TabPanel>
                        <CardLayout
                            items={salad}
                        ></CardLayout>
                    </TabPanel>
                    <TabPanel>
                        <CardLayout
                            items={pizza}
                        ></CardLayout>
                    </TabPanel>
                    <TabPanel>
                        <CardLayout
                            items={salad}
                        ></CardLayout>
                    </TabPanel>
                    <TabPanel>
                        <CardLayout
                            items={soup}
                        ></CardLayout>
                    </TabPanel>
                    <TabPanel>
                        <CardLayout
                            items={drinks}
                        ></CardLayout>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Shop;