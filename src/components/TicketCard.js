// src/components/TicketCard.js
import React from 'react';

const TicketCard = ({ ticket, onEdit, onDelete }) => {
    return (
        <div className="card mb-3 ticket-card">
            <div className="card-body">
                <h5 className="card-title">
                    <i className="bi bi-bus-front-fill"></i> Boleto de {ticket.passengerName}
                </h5>
                <p><strong>Destino:</strong> {ticket.destination}</p>
                <p><strong>Fecha de Viaje:</strong> {ticket.travelDate}</p>
                <p><strong>Hora de Salida:</strong> {ticket.departureTime}</p>
                <p><strong>Número de Boletos:</strong> {ticket.numberOfTickets}</p>
                <p><strong>Método de Pago:</strong> {ticket.paymentMethod}</p>
                <p><strong>Comentarios:</strong> {ticket.additionalComments}</p>
                <button className="btn btn-warning btn-custom" onClick={() => onEdit(ticket)}>Editar</button>
                <button className="btn btn-danger btn-custom" onClick={() => onDelete(ticket)}>Eliminar</button>
            </div>
        </div>
    );
};

export default TicketCard;

