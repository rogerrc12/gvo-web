"use client";

import { TypeAnimation } from "react-type-animation";

import Button from "@/components/common/Button";
import { WHATSAPP_LINK } from "@/constants/WHATSAPP_LINK";

import classes from "./Banner.module.css";
import BrandsList from "./BrandsList";

function Banner() {
  const handleClick = () => {
    window?.open(WHATSAPP_LINK, "_blank");
  };

  return (
    <div className={`h-full min-h-[85vh] grid lg:min-h-[75vh] pt-16 md:pt-0 ${classes.Banner}`} id="home-banner">
      <div className="container flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center flex-[.7]">
          <h1 className="text-3xl md:text-5xl text-center text-white w-[20rem] min-h-[5rem] lg:w-[50rem]">
            <TypeAnimation
              sequence={["Expande", 1500, "Crea", 1500, "Implementa", 1500]}
              wrapper="span"
              speed={15}
              className="inline"
              repeat={Infinity}
            />
            tu idea de negocio
          </h1>
          <p className="text-white text-lg mt-2 mb-6 font-light text-center">
            Te ayudamos a difundir tus ideas y a conectar con tus clientes potenciales
          </p>
          <div className="w-full flex items-center justify-center">
            <Button label="Empezar" onClick={handleClick} />
          </div>
        </div>
        <div className="flex flex-wrap gap-y-4 lg:gap-0 items-center justify-between max-w-[65rem] w-full">
          <p className="text-white lg:text-lg">Ellos han confiado en nosotros:</p>
          <BrandsList />
        </div>
      </div>
    </div>
  );
}

export default Banner;
