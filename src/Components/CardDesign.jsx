import React, { useState } from 'react'
import { toast } from 'react-toastify';

const CardDesign = ({ ticket, onClick }) => {

    // conditional rendering for priority function start
    const getPriorityColor = (priority) => {
        if (priority === "High priority") {
            return "text-red-500 font-semibold"
        };

        if (priority === "Medium priority") {
            return "text-yellow-500 font-semibold"
        };

        if (priority === "Low priority") {
            return "text-green-500 font-semibold"
        };
    };
    // conditional rendering for priority function End

    // Click system for status updating and adding in task status start
    const [status, setStatus] = useState(ticket.status)

  const handleStatus = () => {
    if(status === "open") {
      setStatus ("In Progress")
    }

    // Show toast notification
    toast.success(`'${ticket.title}' is Processing`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    /* this onclick use for adding cards in "Task status" section */
    onClick(ticket)
  }

    const statusBgColorChange = () => {
        if(status === "open") {
            return "bg-green-300 text-green-800"
        } 

        if (status === "In Progress") {
             return "bg-yellow-300 text-yellow-800"
        }
    }

    const statusBallBgChange = () => {
        if (status === "open") {
            return "bg-green-600"
        }

        if(status === "In Progress") {
            return "bg-yellow-500"
        }
    }
    // Click system for status updating and adding in task status end


  return (
    <div className="card w-79 md:w-96 bg-base-100 card-xs shadow-sm p-3 cursor-pointer" onClick={handleStatus}>
      <div className="card-bodies">
        <div className='flex justify-between items-center w-full'>
          <h2 className="card-title flex-1">{ticket.title}</h2>

          <div className={`${statusBgColorChange()} px-3 py-1 rounded-full flex gap-1.5 items-center justify-center`}>
            <div className={`${statusBallBgChange()} w-[0.9rem] h-[0.9rem] rounded-full`}></div>

            {/* handleStatus function for changing status and adding Task status */}
            <p className='text-[0.9rem] font-semibold'>{status}</p>
          </div>
        </div>

        <p className='text-[0.8rem] py-2 text-gray-400'>{ticket.description}</p>

        <div className="flex flex-col md:flex-row justify-between text-[0.8rem]">
          <div className='flex gap-3'>
            <p>{ticket.number}</p>
            
            {/* conditional rendering for priority function implement */}
            <p className={getPriorityColor(ticket.priority)}>{ticket.priority}</p>
          </div>

          <div className='flex gap-3'>
            <p>{ticket.customer}</p>
            <p>{ticket.createdAt}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardDesign
