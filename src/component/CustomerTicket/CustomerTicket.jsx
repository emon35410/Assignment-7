import React, { use } from 'react';

import CustomerCard from '../CustomerCard/CustomerCard';

const CustomerTicket = ({ tickectPromise }) => {
    const Ticket = use(tickectPromise)
    return (
        <div className='max-w-[1200px] md:mx-[110px] mt-20'>
            <h1 className='font-semibold'>Customer Tickets</h1>

            <div className='flex md:flex-row md:justify-between flex-col'>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-3 items-center'>
                    {
                        Ticket.map(ticket =><CustomerCard ticket={ticket}></CustomerCard>)
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