import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact_page">
      <img
        style={{ width: "60px" }}
        src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
        alt=""
      />
      <h1> Github </h1>
      <img
        style={{ width: "60px" }}
        src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-linkedin-circle-512.png"
        alt=""
      />
      <h1> LinkedIn </h1>
      <img
        style={{ width: "60px" }}
        src="https://7xhqfps15y-flywheel.netdna-ssl.com/wp-content/uploads/2021/01/Twitter-Logo.png"
        alt=""
      />
      <h1> Twitter </h1>
    </div>
  );
}

export default Contact;
