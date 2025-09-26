import React from 'react';

const TaskStatus = ({Ticket}) => {
    console.log(Ticket)
    return (
        <div  className=''>
            
            <div className=' '>
                <h1 className='font-semibold text-[#34485A] flex items-center'>Task Status</h1>
                <div className=' bg-white shadow-sm p-4 rounded-b-lg mt-3 flex flex-col '>
                    <h1>Payment Failed - Card Declined</h1>
                    <button className='mt-1 p-2 bg-green-600 text-white rounded-2xl'>Complete</button>
                </div>
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