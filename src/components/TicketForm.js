import React, { useState, useEffect } from 'react';

const TicketForm = ({ onAddTicket, editTicket, onUpdateTicket }) => {
    const [passengerName, setPassengerName] = useState('');
    const [destination, setDestination] = useState('');
    const [numberOfTickets, setNumberOfTickets] = useState('');
    const [travelDate, setTravelDate] = useState('');
    const [departureTime, setDepartureTime] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');
    const [additionalComments, setAdditionalComments] = useState('');

    useEffect(() => {
        if (editTicket) {
            setPassengerName(editTicket.passengerName);
            setDestination(editTicket.destination);
            setNumberOfTickets(editTicket.numberOfTickets);
            setTravelDate(editTicket.travelDate);
            setDepartureTime(editTicket.departureTime);
            setPaymentMethod(editTicket.paymentMethod);
            setAdditionalComments(editTicket.additionalComments);
        }
    }, [editTicket]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!passengerName || !destination || !numberOfTickets || !travelDate) {
            alert('Please fill in all required fields.');
            return;
        }
        if (numberOfTickets < 1 || numberOfTickets > 12) {
            alert('El número de boletos debe estar entre 1 y 12.');
            return;
        }
        const ticket = {
            id: editTicket ? editTicket.id : Date.now(), // Generate a unique ID for the new ticket
            passengerName,
            destination,
            numberOfTickets,
            travelDate,
            departureTime,
            paymentMethod,
            additionalComments
        };

        if (editTicket) {
            onUpdateTicket(ticket);
        } else {
            onAddTicket(ticket);
        }

        // Clear the form
        setPassengerName('');
        setDestination('');
        setNumberOfTickets('');
        setTravelDate('');
        setDepartureTime('');
        setPaymentMethod('');
        setAdditionalComments('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Nombre</label>
                <input
                    type="text"
                    className="form-control"
                    value={passengerName}
                    onChange={(e) => setPassengerName(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label>Destino</label>
                <select
                    className="form-control"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    required
                >
                    <option value="">Seleccionar Destino</option>
                    <option value="Arica">Arica</option>
                    <option value="Antofagasta">Antofagasta</option>
                    <option value="Calama">Calama</option>
                    <option value="Iquique">Iquique</option>
                    <option value="Santiago">Santiago</option>
                    <option value="Valparaíso">Valparaíso</option>
                </select>
            </div>
            <div className="form-group">
                <label>Número de Boletos</label>
                <input
                    type="number"
                    className="form-control"
                    value={numberOfTickets}
                    onChange={(e) => setNumberOfTickets(e.target.value)}
                    min="1"  // Establece el valor mínimo permitido
                    max="12" // Establece el valor máximo permitido
                    required
                />
            </div>
            <div className="form-group">
                <label>Fecha de Viaje</label>
                <input
                    type="date"
                    className="form-control"
                    value={travelDate}
                    onChange={(e) => setTravelDate(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label>Hora de Salida</label>
                <input
                    type="time"
                    className="form-control"
                    value={departureTime}
                    onChange={(e) => setDepartureTime(e.target.value)}
                />
            </div>
            <div className="form-group radio-group">
                <label>Método de Pago</label>
                <div>
                    <label>
                        <input
                            type="radio"
                            name="paymentMethod"
                            value="Tarjeta de Crédito"
                            checked={paymentMethod === 'Tarjeta de Crédito'}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        />
                        Tarjeta de Crédito
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="paymentMethod"
                            value="Tarjeta de Débito"
                            checked={paymentMethod === 'Tarjeta de Débito'}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        />
                        Tarjeta de Débito
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="paymentMethod"
                            value="PayPal"
                            checked={paymentMethod === 'PayPal'}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        />
                        PayPal
                    </label>
                </div>
            </div>
            <div className="form-group">
                <label>Comentarios</label>
                <textarea
                    className="form-control"
                    value={additionalComments}
                    onChange={(e) => setAdditionalComments(e.target.value)}
                />
            </div>
            <button type="submit" className="btn btn-primary">
                {editTicket ? 'Actualizar' : 'Agregar'}
            </button>
        </form>
    );
};

export default TicketForm;
