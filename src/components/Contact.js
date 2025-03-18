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

  function handleInfoClick(e) {
    // Get the text field
    let copyText = e.target.innerText;

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText);

    // Alert the copied text
    alert("Copied the text: " + copyText);
  }
  return (
    <div className="contact-container">
      <div className="icon-container">
        <FaGithub
          size={24}
          className="icon"
          id="github"
          onClick={(e) => handleClick(e)}
        />
        <p className="expand-contact" onClick={(e) => handleInfoClick(e)}>
          lostvayne47
        </p>
      </div>

      <div className="icon-container">
        <FaLinkedinIn
          size={24}
          className="icon"
          id="linkedin"
          onClick={(e) => handleClick(e)}
        />
        <p className="expand-contact" onClick={(e) => handleInfoClick(e)}>
          Aayush Kamtikar
        </p>
      </div>

      <div className="icon-container">
        <TbMailFilled
          size={24}
          className="icon"
          id="mail"
          onClick={(e) => handleClick(e)}
        />
        <p className="expand-contact" onClick={(e) => handleInfoClick(e)}>
          aayushkamtikar@gmail.com
        </p>
      </div>

      <div className="icon-container">
        <BiSolidPhoneCall
          size={24}
          className="icon"
          id="phone"
          onClick={(e) => handleClick(e)}
        />
        <p className="expand-contact" onClick={(e) => handleInfoClick(e)}>
          +91 9921154704
        </p>
      </div>
    </div>
  );
}
