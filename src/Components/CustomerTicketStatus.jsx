import React, { use, useState } from "react";
import CardDesign from "./CardDesign";
import TaskStatus from "./TaskStatus";
import ProgressResolve from "./ProgressResolve";
import ResolveTask from "./ResolveTask";

const CustomerTicketStatus = ({ fetchTicketData }) => {
  const ticketData = use(fetchTicketData);

  const [selectedCard, setSelectedCard] = useState([]);
  const [resolveCard, setResolveCard] = useState([]);

  const handleAddToTask = (ticket) => {
    setSelectedCard((prev) =>
      prev.some((t) => t.id === ticket.id)
        ? prev
        : [...prev, { ...ticket, status: "In Progress" }]
    );
  };

  const handleComplete = (ticket) => {
    setSelectedCard((prev) => prev.filter((t) => t.id !== ticket.id));

    setResolveCard((prev) =>
      prev.some((t) => t.id === ticket.id) ? prev : [...prev, ticket]
    );
  };

  return (
    <div className="container mx-auto">
      <ProgressResolve selectedCard={selectedCard} resolveCard={resolveCard} />

      <div className="my-5 pt-6 flex gap-4 flex-wrap">
        <div className="lg:w-[78%]">
          <h4 className="text-[1.1rem] font-semibold">Customer Tickets</h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
            {ticketData.map((ticket) => (
              <CardDesign
                key={ticket.id}
                ticket={ticket}
                onClick={handleAddToTask}
              />
            ))}
          </div>
        </div>

        <div className="lg:w-[20%]">
          <TaskStatus 
            selectedCard={selectedCard}
            onComplete={handleComplete}
          />
          <ResolveTask resolveCard={resolveCard} />
        </div>
      </div>
    </div>
  );
};

export default CustomerTicketStatus;
