"use client";

import { WHATSAPP_LINK } from "@/constants/WHATSAPP_LINK";

import Button from "../common/Button";
import styles from "./CtaBanner.module.css";

function CtaBanner() {
  const handleClick = () => {
    window?.open(WHATSAPP_LINK, "_blank");
  };

  return (
    <div className={`flex py-[8rem] ${styles.CtaBanner}`}>
      <div className="container flex flex-col items-center justify-center">
        <div className="text-center text-white">
          <h3 className="text-2xl lg:text-3xl">¿Estás listo para ver cómo tus objetivos se vuelven una realidad palpable? </h3>
          <p className="max-w-[46rem] text-[1.05rem] mx-auto mt-2 mb-8">
            No importa si eres un emprendedor entusiasta, un profesional experimentado o alguien que recién comienza, nos adaptaremos a tu
            nivel de experiencia.
          </p>
          <Button label="¡Empieza tu viaje aquí!" onClick={handleClick} />
        </div>
      </div>
    </div>
  );
}

export default CtaBanner;
