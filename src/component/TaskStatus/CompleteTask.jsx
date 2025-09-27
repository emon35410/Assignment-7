import React from 'react';

const CompleteTask = ({select}) => {
   
    return (
        <div onClick={()=>handleremove(select)} className='bg-white shadow-sm p-4 rounded-b-lg mt-3 md:w-[200px] md:h-[70]  hover:cursor-pointer'>
                    <h1 className='text-[#637E96]'>{select.title}</h1>
                </div>
    );
};

export default CompleteTask;