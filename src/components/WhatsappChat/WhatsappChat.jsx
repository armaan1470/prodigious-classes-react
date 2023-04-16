import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./WhatsappChat.css";

function WhatsappChat() {
  return (
    <div className="whatsAppContainer">
      <a
        className="whatsAppIcon"
        href="https://wa.me/+919769611995"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={80} color="#25D366" />
      </a>
    </div>
  );
}

export default WhatsappChat;
