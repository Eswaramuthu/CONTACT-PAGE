import React from "react";
import "./contact.css";
import ContactUs from "./contactus";
import ContactForm from "./form";

export default function Contact() {
  return (
    <section className="contact-section">
      <ContactUs />
      <ContactForm />
    </section>
  );
}