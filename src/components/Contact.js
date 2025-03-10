import React from "react";
import { Github, Linkedin, Mail, PhoneCall } from "lucide-react";
export default function Contact() {
  const ContactInfo = {
    github: "https://github.com/lostvayne47",
    linkedin: "https://www.linkedin.com/in/aayush-kamtikar/",
    mail: "aayushkamtikar@gmail.com",
    phone: 9921154704,
  };
  const handleClick = (e) => {
    const activity = e.target.id;
    const contactData = ContactInfo[activity];
    switch (activity) {
      case "mail":
        window.location.href = "mailto:" + contactData;
        break;
      case "phone":
        window.location.href = "tel:+91" + contactData;
        break;
      default:
        window.open(contactData, "_blank");
        break;
    }
  };

  return (
    <div className="contact-container">
      <div className="icon-container">
        <Github id="github" onClick={(e) => handleClick(e)} />
        <p className="expand-contact">lostvayne47</p>
      </div>

      <div className="icon-container">
        <Linkedin id="linkedin" onClick={(e) => handleClick(e)} />
        <p className="expand-contact">Aayush Kamtikar</p>
      </div>

      <div className="icon-container">
        <Mail id="mail" onClick={(e) => handleClick(e)} />
        <p className="expand-contact">aayushkamtikar@gmail.com</p>
      </div>

      <div className="icon-container">
        <PhoneCall id="phone" onClick={(e) => handleClick(e)} />
        <p className="expand-contact">+91 9921154704</p>
      </div>
    </div>
  );
}
