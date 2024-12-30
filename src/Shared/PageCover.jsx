import React from 'react';
import { Parallax } from 'react-parallax';

const PageCover = ({ img, title, subTitle }) => {
    return (
        <Parallax blur={1} bgImage={img} bgImageAlt="the cat" strength={200}>
            <div
                className=" h-[800px] flex flex-col items-center justify-center">
                <div className=" text-center ">
                    <div className=" text-white bg-[#151515a3] px-80 py-28 mx-auto ">
                        <h1 className="mb-5 text-[88px] font-cinzel font-bold">{title}</h1>
                        <p className="mb-5 text-2xl font-cinzel font-semibold">{subTitle}</p>
                    </div>
                </div>
            </div>
        </Parallax>

    );
};

export default PageCover;