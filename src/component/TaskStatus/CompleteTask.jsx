import React from 'react';

const CompleteTask = ({select}) => {
   
    return (
        <div className='bg-white shadow-sm p-4 rounded-b-lg mt-3 md:w-[200px] md:h-[70]'>
                    <h1>{select.title}</h1>
                </div>
    );
};

export default CompleteTask;