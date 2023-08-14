"use client";

import CountUp from "react-countup";

import { WHATSAPP_LINK } from "@/constants/WHATSAPP_LINK";

import Button from "../common/Button";

function About() {
  const handleClick = () => {
    window?.open(WHATSAPP_LINK, "_blank");
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center h-full min-h-[70vh]" id="expansion">
      <div className="container">
        <div className="py-20 h-full flex flex-col lg:flex-row items-center justify-center gap-[5rem] lg:gap-0">
          <div className="lg:flex-[.75] lg:pr-10">
            <h2 className="text-2xl lg:text-4xl font-[500]">Te ayudamos a que tu negocio tenga un crecimiento acelerado</h2>
            <p className="mt-4 text-gray-500 text-lg">
              Somos una BPO centrada en brindar soluciones digitales de conectividad y comunicación. Conoce uno de los servicios más
              solicitado en el sector B2B.
            </p>
            <ul className="mt-6">
              <li className="my-4">
                <h3 className="text-xl font-bold">Expansion B2B</h3>
                <p className="mt-2 text-gray-500">
                  El servicio de agendamientos de citas que te lleva a conectar con tu cliente potencial. Lleva tu idea de negocio a
                  mercados locales e internacionales y obtén leads interesados en conocer tu negocio. Te ayudamos desde la creación de la
                  estrategia de comunicación hasta dar seguimiento a tus prospectos.
                </p>
              </li>
            </ul>
            <Button label="Más información" onClick={handleClick} />
          </div>
          <div className="grid grid-cols-2 gap-x-5 gap-y-8">
            <div className="relative flex flex-col items-center justify-center p-3 w-[8.5rem] min-h-[9rem] lg:w-[13rem] lg:h-[12rem] bg-[#33b1d3] rounded-lg animate-bounce animate-infinite animate-duration-[5000ms] animate-ease-in-out">
              <p className="text-5xl text-white relative">+</p>
              <CountUp end={30} duration={8} delay={0}>
                {({ countUpRef }) => <span className="text-4xl text-white" ref={countUpRef} />}
              </CountUp>
              <p className="text-white text-center font-light text-sm">Negocios en crecmiento</p>
            </div>
            <div className="relative flex flex-col items-center justify-center p-3 w-[8.5rem] min-h-[9rem] lg:w-[13rem] lg:h-[12rem] bg-orange-200 rounded-lg animate-bounce animate-infinite animate-duration-[5000ms] animate-ease-in-out animate-delay-500">
              <p className="text-5xl text-[#f97316] relative">+</p>
              <CountUp end={100} duration={8} delay={0}>
                {({ countUpRef }) => <span className="text-4xl text-[#f97316]" ref={countUpRef} />}
              </CountUp>
              <p className="text-[#f97316] text-center font-light text-sm">Colaboraciones</p>
            </div>
            <div className="relative flex flex-col items-center justify-center p-3 w-[8.5rem] min-h-[9rem] lg:w-[13rem] lg:h-[12rem] bg-blue-200 rounded-lg animate-bounce animate-infinite animate-duration-[5000ms] animate-ease-in-out">
              <p className="text-5xl text-[#33b1d3] relative">+</p>
              <CountUp end={60} duration={8} delay={0}>
                {({ countUpRef }) => <span className="text-4xl text-[#33b1d3]" ref={countUpRef} />}
              </CountUp>

              <p className="text-[#33b1d3] text-center font-light text-sm">Oportunidades</p>
            </div>
            <div className="relative flex flex-col items-center justify-center p-3 w-[8.5rem] h-[9rem] lg:w-[13rem] lg:h-[12rem] bg-[#f97316] rounded-lg animate-bounce animate-infinite animate-duration-[5000ms] animate-ease-in-out animate-delay-500">
              <p className="text-5xl text-white relative">+</p>
              <CountUp end={200} duration={8} delay={0}>
                {({ countUpRef }) => <span className="text-4xl text-white" ref={countUpRef} />}
              </CountUp>
              <p className="text-white text-center font-light text-sm">Citas generadas</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
