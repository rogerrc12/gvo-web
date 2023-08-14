"use client";
import { useEffect, useRef, useState } from "react";

import ContactForm from "./ContactForm";

function Contact() {
  const contactRef = useRef<HTMLDivElement>(null);
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      { rootMargin: "-20%" }
    );

    if (contactRef.current) observer.observe(contactRef.current);
  }, []);

  useEffect(() => {
    if (isIntersecting && contactRef.current) {
      contactRef.current
        ?.querySelector("h2")
        ?.classList.add("animate-once", "animate-duration-[2000ms]", "animate-ease-in", "animate-fade-right", "opacity-1");
    }
  }, [isIntersecting]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center h-full bg-gray-100 py-20" id="contacto" ref={contactRef}>
      <div className="container flex flex-wrap items-center justify-center gap-16">
        <div className="bg-white p-10 rounded-lg lg:flex-[.4] w-full order-2 lg:order-1">
          <h4 className="text-2xl font-[500]">¿Estás listx para empezar?</h4>
          <ContactForm />
        </div>
        <div className="lg:flex-[.6] order-1 lg:order-2">
          <h2 className="text-2xl lg:text-4xl font-[500] opacity-0">Se parte de la revolución digital que está transformando el juego</h2>
          <p className="mt-4 text-gray-500 text-lg">
            Si estás listo para desatar el potencial de tu marca y llevar tus metas al siguiente nivel. Estamos listos para ayudarte,
            rellena el formulario y nos pondremos en contacto contigo.
          </p>
          <div className="my-10 h-[1px] bg-gray-300 w-full" />
          <h4 className="font-semibold text-lg mb-2">Nuestra Oficina</h4>
          <address className="text-gray-500">
            Ofc. 305 Av. Arequipa, <br /> Lima, Perú, 1345
          </address>
          <p className="mt-5 text-gray-500">
            Teléfono: <a href="tel:+51966326162">(+51) 966 326 162</a>
          </p>
          <p className="mt-1 text-gray-500">
            Correo:{" "}
            <a className="text-blue-600 cursor-pointer" href="mailto:ventas@gvobpo.com">
              ventas@gvobpo.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
