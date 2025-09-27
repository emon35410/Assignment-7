import React from 'react';
import bgImg from '../../assets/vector1.png'
import bgImg2 from '../../assets/bgimage2.png'

const Banner = ({selectedTicket,selectedComplete}) => {
    return (
        <div className='flex flex-col  md:flex-row justify-center-safe gap-6 mt-20'>
            <div className=' w-full h-[150px]  flex justify-center items-center  md:w-[508px] md:h-[250px] rounded-lg '
                style={{
                    backgroundImage: `url(${bgImg}), url(${bgImg2}), linear-gradient(125.07deg,#632ee3,#9f62f2)`,
                    backgroundSize: '150px 100%, 150px 100%, cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'left top, right top, center'
                }}
            >
                <div className='flex flex-col justify-center items-center gap-1 text-white'>
                    <h3>In-Progress</h3>
                    <h1 className='font-semibold text-5xl'>{Math.max(0, selectedTicket.length - selectedComplete.length)}</h1>
                </div>
            </div>
            <div className=' w-full h-[150px] flex gap-1 justify-center items-center   md:w-[508px] md:h-[250px] rounded-lg '
                style={{

                    backgroundImage: `url(${bgImg}), url(${bgImg2}), linear-gradient(90.00deg,#54cf68,#00827a)`,
                    backgroundSize: '150px 100%, 150px 100%, cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'left top, right top, center'

                }}
            >
                <div className='flex flex-col justify-center items-center text-white'>
                    <h3>Resolved</h3>
                    <h1 className='font-semibold text-5xl'>{selectedComplete.length}</h1>
                </div>
            </div>
        </div>
    );
};

export default Banner;