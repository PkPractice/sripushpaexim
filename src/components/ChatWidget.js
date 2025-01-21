import React, { useState } from 'react';
import './ChatWidget.css';

function ChatWidget() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', query: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Hi, I have a query.\n\nName: ${formData.name}\nQuery: ${formData.query}`;
    const whatsappUrl = `https://wa.me/8978236216?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setFormData({ name: '', query: '' });
    setIsFormVisible(false);
  };

  return (
    <div className="chat-widget">
      <button
        className="chat-button"
        onClick={() => setIsFormVisible(!isFormVisible)}
      >
        Chat with Us
      </button>

      {isFormVisible && (
        <div className="chat-form">
          <h4>Submit Your Query</h4>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
            <textarea
              placeholder="Your Query"
              value={formData.query}
              onChange={(e) =>
                setFormData({ ...formData, query: e.target.value })
              }
              required
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default ChatWidget;
