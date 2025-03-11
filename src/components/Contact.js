import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";
import { BiSolidPhoneCall } from "react-icons/bi";

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
    console.log(activity + "  " + contactData);
    if (contactData && activity) {
      switch (activity) {
        case "mail":
          window.location.href = "mailto:" + contactData;
          break;
        case "phone":
          window.location.href = "tel:+91" + contactData;
          break;
        case "github":
          window.open(contactData, "_blank");
          break;
        case "linkedin":
          window.open(contactData, "_blank");
          break;
        default:
          break;
      }
    }
  };

  return (
    <div className="contact-container">
      <div className="icon-container">
        <FaGithub
          size={24}
          className="icon"
          id="github"
          onClick={(e) => handleClick(e)}
        />
        <p className="expand-contact">lostvayne47</p>
      </div>

      <div className="icon-container">
        <FaLinkedinIn
          size={24}
          className="icon"
          id="linkedin"
          onClick={(e) => handleClick(e)}
        />
        <p className="expand-contact">Aayush Kamtikar</p>
      </div>

      <div className="icon-container">
        <TbMailFilled
          size={24}
          className="icon"
          id="mail"
          onClick={(e) => handleClick(e)}
        />
        <p className="expand-contact">aayushkamtikar@gmail.com</p>
      </div>

      <div className="icon-container">
        <BiSolidPhoneCall
          size={24}
          className="icon"
          id="phone"
          onClick={(e) => handleClick(e)}
        />
        <p className="expand-contact">+91 9921154704</p>
      </div>
    </div>
  );
}
