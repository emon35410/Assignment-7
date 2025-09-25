import React, { use } from 'react';
import greenCircleImg from '../../assets/circle-green.png'
import yellowCircleImg from '../../assets/circle-yellow.png'
import calenderImg from '../../assets/calendar-line.png'

const CustomerTicket = ({ tickectPromise }) => {
    const Ticket = use(tickectPromise)
    return (
        <div className='max-w-[1200px] md:mx-[110px] mt-20'>
            <h1 className='font-semibold'>Customer Tickets</h1>

            <div className='flex md:flex-row md:justify-between flex-col'>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-3 items-center'>
                    {
                        Ticket.map(ticket =>
                        <div className='mt-2 p-3 md:w-[430px] md:h-[160px]  bg-white shadow-sm rounded-2xl'>
                        <div className='flex justify-between items-center mb-2 roun'>
                            <h1 className='font-medium'>{ticket.title}</h1>
                            <div className='font-medium flex items-center justify-center p-1 rounded-2xl gap-1 bg-green-300'>

                                <img src={greenCircleImg} alt="" />
                                <span>Open</span>
                            </div>
                        </div>
                        <p className='mb-1 text-[#637E96]'>{ticket.description}</p>
                        <div className='flex justify-between items-center'>
                            <div className='flex justify-center gap-2 items-center'>
                                <h1 className='text-[#637E96]'>#{ticket.id}</h1>
                                <h1 className='font-medium text-red-400'>{ticket.priority}</h1>
                            </div>
                            <div className='text-[#637E96] flex justify-center gap-3 items-center'>
                                <h1 >{ticket.customer}</h1>
                                <div className='flex justify-center gap-3 items-center'>
                                    <img src={calenderImg} alt="" />
                                    <h1>{ticket.createdAt}</h1>
                                </div>
                            </div>
                        </div>
                    </div>)
                    }

                    

                </div>
                <div className=''>
                    <h1>task status</h1>
                </div>


            </div>
        </div>
    );
};

export default CustomerTicket;