import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./Contact.scss";

const Contact = ({ selectedLng, onLngChange }) => {
  const { t, i18n } = useTranslation();

  // Estados para manejar el formulario y el mensaje de confirmación
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Al enviar el formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = {
      name,
      email,
      message,
      language: selectedLng,
    };

    try {
      const response = await fetch(
        "https://2d1c-81-44-202-114.ngrok-free.app/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setStatus(t("formSuccess"));
      } else {
        setStatus(t("formError"));
      }
    } catch (error) {
      setStatus(t("formServerError"));
    } finally {
      setIsLoading(false); // Terminar el estado de carga
    }
  };

  // Effect to handle language changes
  useEffect(() => {
    localStorage.setItem("appLanguage", selectedLng);
    i18n.changeLanguage(selectedLng);
  }, [selectedLng, i18n]);

  return (
    <div className="contact" id="contact">
      <h1>{t("Contact")}</h1>
      <div className="contact--form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div className="contact--form__lng">
            <select
              aria-label="Language"
              name="language"
              id="language"
              value={selectedLng}
              onChange={(e) => onLngChange(e.target.value)} // Change this line
              required
            >
              <option value="es">es</option>
              <option value="en">en</option>
              <option value="de">de</option>
            </select>
          </div>
          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <button type="submit" disabled={isLoading}>
            {isLoading ? "Sending ..." : "Send"}
          </button>
          {status && <p>{status}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
