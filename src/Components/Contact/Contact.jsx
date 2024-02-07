import React from "react";
import "./Contact.scss";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <div className="contact" id="contact">
      <h1>{t("Contact")}</h1>
      <div className="contact--form">
        <form
          target="_blank"
          action="https://formsubmit.co/a61e526a5bc9dcf1aa8c0295275585ef"
          method="POST"
        >
          <input type="text" name="name" placeholder="Full Name" required />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
          />
          <textarea
            placeholder="Your Message"
            name="message"
            rows="10"
            required
          ></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
