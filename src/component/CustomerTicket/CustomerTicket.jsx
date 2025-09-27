import React, { use, useState } from 'react';

import CustomerCard from '../CustomerCard/CustomerCard';
import TaskStatus from '../TaskStatus/TaskStatus';
import { toast } from 'react-toastify';


const CustomerTicket = ({solved,setSolved, tickectPromise,selectedTicket,setSelectedTicket,selectedComplete,setSelectedComplete }) => {
    const Ticket = use(tickectPromise)
    const handleSolve= (ticket)=>{
        toast("Resolved Done")
        setSolved([...solved,ticket])
        
        setSelectedTicket(selectedTicket.filter(t => t.id !== ticket.id));
    }
    return (
        <div className='md:mx-[110px] mt-20'>
            <h1 className='font-semibold'>Customer Tickets</h1>

            <div className='flex md:flex-row md:justify-between flex-col'>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-3 items-center'>
                    {
                        Ticket.map((ticket) =><CustomerCard key={ticket.id} solved={solved} setSolved={setSolved}  selectedTicket={selectedTicket} setSelectedTicket={setSelectedTicket}   ticket={ticket}></CustomerCard>)
                    }

                </div>
                 <TaskStatus  handleSolve={handleSolve} solved={solved} setSolved={setSolved} selectedComplete={selectedComplete}  setSelectedComplete={setSelectedComplete}  Ticket={Ticket} selectedTicket={selectedTicket} setSelectedTicket={setSelectedTicket}></TaskStatus>
            </div>
           
        </div>
    );
};

export default CustomerTicket;