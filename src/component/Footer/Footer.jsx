import React from 'react';

const Footer = () => {
    return (
        <div className=' pl-3 pt-3 bg-black md:pt-20 md:pr-20 md:pb-[30px] md:pl-20 text-white md:flex md:justify-around'>
            <div className='mt-3 w-[350px] h-[160px]'>
                <h1 className='mb-3 font-semibold'>CS — Ticket System</h1>
                <p className='text-[#a1a1aa]'>Customers can submit issues anytime through this platform. Each request is logged, prioritized, and assigned to our support team. Track progress and resolution updates instantly online.</p>
            </div>
            <div className=' mt-3flex flex-col gap-3'>
                <h1 className='font-semibold'>Company</h1>
               <h3 className='text-[#a1a1aa]'>About Us</h3>
               <h3 className='text-[#a1a1aa]'>Our Mission</h3>
               <h3 className='text-[#a1a1aa]'>Contact Saled</h3>
            </div>
            <div className='mt-3 flex flex-col gap-3'>
                <h1 className='font-semibold'>Information</h1>
                <h3 className='text-[#a1a1aa]'>Privacy Policy</h3>
                <h3 className='text-[#a1a1aa]'>Terms & Condition</h3>
                <h3 className='text-[#a1a1aa]'>Join Us</h3>
            </div>
            <div className='mt-3 flex flex-col gap-2'>
                <h1 className='font-semibold'>Social Link</h1>
                <div className='flex items-center gap-2'>
                    <img src="https://i.ibb.co.com/nNnky4mr/fi-5968764.png" alt="" />
                    <h1 className='text-[#a1a1aa]'>@CS — Ticket System</h1>
                </div>
                <div className='flex items-center gap-1'>
                    <img src="https://i.ibb.co.com/SwCBZS2P/fi-5969020.png" alt="" />
                    <h1 className='text-[#a1a1aa]'>@CS — Ticket System</h1>
                </div>
                <div className='flex items-center gap-1'>
                    <img src="https://i.ibb.co.com/23PnKMN2/fi-6244710.png" alt="" />
                    <h1 className='text-[#a1a1aa]'>@CS — Ticket System</h1>
                </div>
                <div className='flex items-center gap-1'>
                    <img src="https://i.ibb.co.com/C5SZzs1f/fi-145807.png" alt="" />
                    <h1 className='text-[#a1a1aa]'>support@cst.com</h1>
                </div>
            </div>
            
        </div>
    );
};

export default Footer;