import React, { useState } from "react";
import { toast } from "react-toastify";

const CardDesign = ({ ticket, onClick }) => {
  const [status, setStatus] = useState(ticket.status);

  // Priority Color
  const priorityColors = {
    "High priority": "text-red-500 font-semibold",
    "Medium priority": "text-yellow-500 font-semibold",
    "Low priority": "text-green-500 font-semibold",
  };

  const getPriorityColor = (priority) => priorityColors[priority] || "";

  // Status handler
  const handleStatus = () => {
    if (status === "open") {
      setStatus("In Progress");
    }

    toast.success(`'${ticket.title}' is Processing`, {
      position: "top-right",
      autoClose: 2000,
    });

    onClick(ticket);
  };

  // Status Colors
  const statusStyles = {
    open: {
      bg: "bg-green-300 text-green-800",
      dot: "bg-green-600",
    },
    "In Progress": {
      bg: "bg-yellow-300 text-yellow-800",
      dot: "bg-yellow-500",
    },
  };

  const { bg, dot } = statusStyles[status] || {};

  return (
    <div
      className="card w-full md:w-[98%] bg-white card-xs shadow-sm p-4 cursor-pointer"
      onClick={handleStatus}
    >
      <div className="card-bodies">
        <div className="flex justify-between items-center w-full">
          <h2 className="card-title flex-1">{ticket.title}</h2>

          <div
            className={`${bg} px-3 py-1 rounded-full flex gap-1.5 items-center`}
          >
            <div className={`${dot} w-[0.9rem] h-[0.9rem] rounded-full`} />
            <p className="text-[0.9rem] font-semibold">{status}</p>
          </div>
        </div>

        <p className="text-[0.8rem] py-2 text-gray-400">{ticket.description}</p>

        <div className="flex flex-col md:flex-row justify-between text-[0.8rem]">
          <div className="flex gap-3">
            <p>{ticket.number}</p>
            <p className={getPriorityColor(ticket.priority)}>
              {ticket.priority}
            </p>
          </div>

          <div className="flex gap-3">
            <p>{ticket.customer}</p>
            <p>{ticket.createdAt}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDesign;
