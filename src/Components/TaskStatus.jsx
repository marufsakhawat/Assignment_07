import React from 'react'
import { toast } from 'react-toastify';

const TaskStatus = ({ selectedCard, onComplete }) => {
  return (
    <div>
      <h4 className='text-[1.2rem] font-semibold'>Task Status</h4>

      <div>
        {selectedCard.length === 0 && (
          <p className='text-gray-600 mt-3'>
            Select a ticket to add to Task Status
          </p>
        )}

        {selectedCard.map((ticket) => (
          <div
            key={ticket.id}
            className='bg-white shadow w-[100%] px-3 py-5 mt-3 rounded-sm'
          >
            <p className='font-semibold'>{ticket.title}</p>

            <button
              onClick={() => {
                toast.success(`Ticket '${ticket.title}' marked as complete!`, {
                  position: "top-right",
                  autoClose: 2000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                });
                onComplete(ticket);
              }}
              className='bg-green-600 w-full text-white py-2 mt-3 rounded cursor-pointer'
            >
              Complete
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TaskStatus
