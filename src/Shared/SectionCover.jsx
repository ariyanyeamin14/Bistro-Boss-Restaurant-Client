import React from 'react';
import { Parallax } from 'react-parallax';

const SectionCover = ({img, title, subTitle}) => {
    return (
        <Parallax blur={1} bgImage={img} bgImageAlt="the cat" strength={200}>
            <div
                className=" h-[800px] w-[60%] mx-auto flex flex-col items-center justify-center">
                <div className=" text-center ">
                    <div className=" text-white bg-[#151515a3] px-40 py-24 mx-auto ">
                        <h1 className="mb-5 text-[45px] font-cinzel font-semibold">{title}</h1>
                        <p className="mb-5 text-base font-inter ">{subTitle}</p>
                    </div>
                </div>
            </div>
        </Parallax>
    );
};

export default SectionCover;