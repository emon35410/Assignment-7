import React, { use, useState } from 'react';

import CustomerCard from '../CustomerCard/CustomerCard';
import TaskStatus from '../TaskStatus/TaskStatus';



const CustomerTicket = ({ solved, setSolved, tickectPromise, selectedTicket, setSelectedTicket, selectedComplete, setSelectedComplete }) => {
    const Ticket = use(tickectPromise)
    const visibleTickets = Ticket.filter(
    ticket => !selectedComplete.some(done => done.id === ticket.id)
  )
    return (
        <div className='md:mx-[110px] mt-20'>
            <h1 className='font-semibold'>Customer Tickets</h1>

            <div className='flex md:flex-row md:justify-between flex-col'>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-3 items-center'>
                    {
                        visibleTickets.map((ticket) => <CustomerCard key={ticket.id} solved={solved} setSolved={setSolved} selectedTicket={selectedTicket} setSelectedTicket={setSelectedTicket} ticket={ticket}></CustomerCard>)
                    }

                </div>
                <TaskStatus solved={solved} setSolved={setSolved} selectedComplete={selectedComplete} setSelectedComplete={setSelectedComplete} Ticket={Ticket} selectedTicket={selectedTicket} setSelectedTicket={setSelectedTicket}></TaskStatus>
            </div>

        </div>
    );
};

export default CustomerTicket;