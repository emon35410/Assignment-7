import React, { useState } from 'react';
import greenCircleImg from '../../assets/circle-green.png'
import yellowCircleImg from '../../assets/circle-yellow.png'
import calenderImg from '../../assets/calendar-line.png'
import { toast } from 'react-toastify';

const CustomerCard = ({ ticket,setSelectedTicket,selectedTicket,solved, setSolved }) => {
    const [toggle,settoggle] = useState(false)
    const handleOpen = ()=>{
    toast("In-Progress")
    settoggle(!toggle)
    setSelectedTicket([...selectedTicket,ticket])
    }
    return (
        <>
            <div onClick={handleOpen}
               
             className='hover:cursor-pointer mt-2 p-3 md:w-[400px] md:h-[200px]  bg-white shadow-sm rounded-2xl'>
                <div className='flex justify-between items-center mb-2 roun'>
                    <h1 className='font-medium'>{ticket.title}</h1>
                    {
                        toggle === false ? (
                            <div className="font-medium flex items-center justify-center p-1 rounded-2xl gap-1 bg-green-300">
                                <img src={greenCircleImg} alt="" />
                                <span>Open</span>
                            </div>
                        ) : (
                            <div className="font-medium flex items-center justify-center p-1 rounded-2xl gap-1 bg-yellow-300">
                                <img src={yellowCircleImg} alt="" />
                                <span>In-Progress</span>
                            </div>
                        )
                    }

                </div>
                <p className='mb-1 text-[#637E96]'>{ticket.description}</p>
                <div className='flex justify-between items-center'>
                    <div className='flex justify-center gap-2 items-center'>
                        <h1 className='text-[#637E96]'>#{ticket.id}</h1>
                        <h1 className={`font-medium ${ticket.priority === "High Priority" ? "text-red-500" : ticket.priority === "Low Priority" ? "text-green-500" : "text-yellow-500"}`}>{ticket.priority}</h1>
                    </div>
                    <div className='text-[#637E96] flex justify-center gap-3 items-center'>
                        <h1 >{ticket.customer}</h1>
                        <div className='flex justify-center gap-3 items-center'>
                            <img src={calenderImg} alt="" />
                            <h1>{ticket.createdAt}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>


    );
};

export default CustomerCard;