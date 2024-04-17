import React, { useState } from 'react';

const Support = () => {
  const [tickets, setTickets] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newTicket = {
      subject: formData.get('subject'),
      description: formData.get('description'),
    };
    setTickets([...tickets, newTicket]);
    event.target.reset();
  };

  return (
    <div>
      <h1>Support Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="subject">Subject:</label>
          <input type="text" id="subject" name="subject" required />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea id="description" name="description" required />
        </div>
        <button type="submit">Submit Ticket</button>
      </form>
      <hr />
      <h2>Submitted Tickets:</h2>
      {tickets.length === 0 ? (
        <p>No tickets submitted yet.</p>
      ) : (
        <ul>
          {tickets.map((ticket, index) => (
            <li key={index}>
              <h3>{ticket.subject}</h3>
              <p>{ticket.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Support;
