import React, { useState, useEffect } from 'react';
import TicketForm from '../components/TicketForm';
import TicketCard from '../components/TicketCard';

const BookingPage = () => {
    const [tickets, setTickets] = useState([]);
    const [editTicket, setEditTicket] = useState(null); // Estado para boleto en edición

    useEffect(() => {
        const storedTickets = JSON.parse(localStorage.getItem('tickets')) || [];
        setTickets(storedTickets);
    }, []);

    const handleAddTicket = (newTicket) => {
        const updatedTickets = [...tickets, newTicket];
        setTickets(updatedTickets);
        localStorage.setItem('tickets', JSON.stringify(updatedTickets));
    };

    const handleUpdateTicket = (updatedTicket) => {
        const updatedTickets = tickets.map(ticket =>
            ticket.id === updatedTicket.id ? updatedTicket : ticket
        );
        setTickets(updatedTickets);
        localStorage.setItem('tickets', JSON.stringify(updatedTickets));
        setEditTicket(null); // Limpiar el estado de edición
    };

    const handleDeleteTicket = (ticketToDelete) => {
        const updatedTickets = tickets.filter(ticket => ticket.id !== ticketToDelete.id);
        setTickets(updatedTickets);
        localStorage.setItem('tickets', JSON.stringify(updatedTickets));
    };

    const handleEditTicket = (ticketToEdit) => {
        setEditTicket(ticketToEdit);
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h2>Compra de Pasajes</h2>
                    <TicketForm
                        onAddTicket={handleAddTicket}
                        editTicket={editTicket}
                        onUpdateTicket={handleUpdateTicket}
                    />
                </div>
                <div className="col-md-6">
                    <h2>Lista de Pasajes</h2>
                    {tickets.map((ticket, index) => (
                        <TicketCard
                            key={index}
                            ticket={ticket}
                            onEdit={handleEditTicket}
                            onDelete={handleDeleteTicket}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BookingPage;
