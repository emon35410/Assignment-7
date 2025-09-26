import React, { useState } from 'react';

const TaskStatus = ({Ticket,selectedTicket}) => {
    
    return (
        <div  className=''>
            
            <div className=' '>
                <h1 className='font-semibold text-[#34485A] flex items-center'>Task Status</h1>
                {
                    selectedTicket.map(select=>
                    <div className=' bg-white shadow-sm p-4 rounded-b-lg mt-3 flex flex-col md:w-[200px] md:h-[70] '>
                    
                    <h1 className='mb-3 text-[#637E96]'>{select.title}</h1>
                    <button className='mt-1 p-2 bg-green-600 text-white rounded-2xl hover:cursor-pointer'>Complete</button>
                </div>)
                }
            </div>

            <div className='  '>
                <h1 className='font-semibold text-[#34485A]'>Resolved Task</h1>
                <div className='bg-white shadow-sm p-4 rounded-b-lg mt-3'>
                    <h1>Incorrect Billing Address</h1>
                </div>
            </div>
        </div>
    );
};

export default TaskStatus;