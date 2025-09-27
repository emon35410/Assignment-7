import React from 'react';

const CompleteTask = ({ select }) => {

    return (
        <div className='bg-[#c4d3e136] shadow-sm p-4 rounded-b-lg mt-3 mb-3 md:w-[200px] md:h-[70]  hover:cursor-pointer'>
            <h1 className='text-[#5ca0dc] font-normal flex justify-center items-center'>{select.title}</h1>
            <h1 className='mt-3 font-bold flex items-center justify-center text-green-700'>👏 Completed</h1>
        </div>
    );
};

export default CompleteTask;