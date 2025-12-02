import React from 'react'

const ResolveTask = ({ resolveCard = [] }) => {
  return (
    <div className='mt-4'>
      <h3 className='text-[1.2rem] font-semibold'>Resolved Task</h3>

      {resolveCard.length === 0 && <p className='text-gray-600 mt-3'>No resolved task yet</p>}

      {
        resolveCard.map(ticket => (
          <div key={ticket.id} className='bg-purple-100 shadow w-[100%] px-4 py-5 mt-4 rounded'>
            <p className='font-semibold text-purple-700'>{ticket.title}</p>

            <div className='flex justify-between'>
              <p className='text-sm text-gray-600'>{ticket.customer}</p>
              <p className='text-sm text-gray-800'>Completed</p>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default ResolveTask
