import React, { use, useState } from 'react';

import CustomerCard from '../CustomerCard/CustomerCard';
import TaskStatus from '../TaskStatus/TaskStatus';


const CustomerTicket = ({ tickectPromise,selectedTicket,setSelectedTicket }) => {
    const Ticket = use(tickectPromise)
   
   
    return (
        <div className='md:mx-[110px] mt-20'>
            <h1 className='font-semibold'>Customer Tickets</h1>

            <div className='flex md:flex-row md:justify-between flex-col'>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-3 items-center'>
                    {
                        Ticket.map((ticket) =><CustomerCard key={ticket.id} selectedTicket={selectedTicket} setSelectedTicket={setSelectedTicket}   ticket={ticket}></CustomerCard>)
                    }

                </div>
                 <TaskStatus Ticket={Ticket} selectedTicket={selectedTicket} ></TaskStatus>
            </div>
           
        </div>
    );
};

export default CustomerTicket;