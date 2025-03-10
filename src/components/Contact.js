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
    <div
      className="my-4 d-flex g-5 justify-content-around"
      style={{ minWidth: "15rem" }}
    >
      <Github id="github" onClick={(e) => handleClick(e)} />
      <Linkedin id="linkedin" onClick={(e) => handleClick(e)} />
      <Mail id="mail" onClick={(e) => handleClick(e)} />
      <PhoneCall id="phone" onClick={(e) => handleClick(e)} />
    </div>
  );
}
