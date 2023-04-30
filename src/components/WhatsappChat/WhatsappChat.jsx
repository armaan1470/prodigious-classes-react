import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import avatar from "../../assets/images/wa_avatar.png"
import avatar1 from "../../assets/images/wa_dp1.jpg"
import "./WhatsappChat.css";

function WhatsappChat() {
  return (
    <div className="whatsAppContainer">

      <FloatingWhatsApp phoneNumber="+919769611995" accountName="Philomathean Classes" avatar={avatar1} textReply="Hello, I'm interested in your product."         
        allowEsc
        allowClickAway
        notification
        notificationSound />

      {/* <a
        className="whatsAppIcon"
        href="https://wa.me/+919769611995"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={80} color="#25D366" />
        
      </a> */}
    </div>
  );
}

export default WhatsappChat;
