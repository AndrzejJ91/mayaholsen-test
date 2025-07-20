"use client";


import ContactData from "./ContactData";
import ContactForm from "./ContactForm";


export default function Contact() {
    return (
        <section className="w-full min-h-screen my-fade-in">
            <ContactData />
            <ContactForm />
            
        </section>

    );
}
