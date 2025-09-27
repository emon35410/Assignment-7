import React, { useState } from 'react';
import { toast } from 'react-toastify';
import CompleteTask from './CompleteTask';

const TaskStatus = ({ selectedTicket, setSelectedTicket, selectedComplete, setSelectedComplete, solved, setSolved }) => {
    console.log(selectedComplete)
    const [clickComplete, setclickComplete] = useState(false)
    const handleComplete = (Task) => {

        toast.success("Problem Solved")
        setclickComplete(!clickComplete)
        setSelectedComplete([...selectedComplete, Task])
        setSelectedTicket(selectedTicket.filter(remove => remove.id !== Task.id))

    }

    return (
        <div className=''>

            <div className='mb-5 bg-white shadow-sm p-1 pl-0 pr-0 pb-0 rounded-t-sm'>
                <h1 className='font-semibold text-[#34485A] flex justify-center items-center'>Task Status</h1>

                {
                    selectedTicket.map((select, index) =>
                        <div key={index} className=' bg-[#c4d3e136] shadow-sm p-4 rounded-b-lg mt-3 flex flex-col mb-4 md:w-[200px] md:h-[70] '>

                            <h1 className='mb-3 text-[#637E96] flex justify-center items-center'>{select.title}</h1>
                            <button onClick={() => {
                                handleComplete(select);


                            }} className='mt-1 p-2 bg-green-600 text-white rounded-2xl hover:cursor-pointer'>Complete</button>
                        </div>
                    )
                }
            </div>
            <div className='bg-white shadow-sm p-1 pl-0 pr-0 pb-0 rounded-sm'>
                <h1 className='font-semibold text-[#34485A] flex justify-center items-center mb-3'>Resolved Task</h1>
                {
                    selectedComplete.map(select => <CompleteTask key={select.id} select={select} solved={solved} setSolved={setSolved}></CompleteTask>)
                }
            </div>


        </div>
    );
};

export default TaskStatus;