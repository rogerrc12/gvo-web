"use client";

import emailjs from "@emailjs/browser";
import { useState } from "react";

import Button from "../common/Button";
import ErrorToast from "../common/ErrorToast";

interface FormElements extends HTMLFormControlsCollection {
  from_name: HTMLInputElement;
  from_email: HTMLInputElement;
  message: HTMLTextAreaElement;
}

function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);

    evt.preventDefault();

    const inputs = evt.currentTarget.elements as FormElements;

    const data = {
      from_name: inputs.from_name.value,
      from_email: inputs.from_email.value,
      message: inputs.message.value,
    };

    try {
      await emailjs.send("service_7vl3brm", "template_1ax1enh", data, "user_TKc0ClE1BhmlSxfjJs3Dp");
      setSent(true);
      setError(null);
    } catch (error) {
      setError("Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 gap-4 my-4">
        <input
          type="text"
          placeholder="Nombre completo"
          className="w-full p-4 py-3 border border-gray-200 rounded-md"
          name="from_name"
          required
          // value={fullName}
          // onChange={(e) => setFullName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Correo electrónico"
          className="w-full p-4 py-3 border border-gray-200 rounded-md"
          name="from_email"
          required
          // value={email}
          // onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder="Escribe tu consulta"
          className="w-full min-h-[10rem] p-4 py-3 border border-gray-200 rounded-md resize-none"
          name="message"
          required
          // value={message}
          // onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <Button
        label={!sent ? "Enviar consulta" : "¡Consulta enviada!"}
        type="submit"
        onClick={() => {}}
        loading={isLoading}
        disabled={sent}
      />
      {error && <ErrorToast errorMessage={error} onClose={() => setError(null)} />}
    </form>
  );
}

export default ContactForm;
