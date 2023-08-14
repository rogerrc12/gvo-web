import Image from "next/image";

import styles from "./Services.module.css";

function Benefits() {
  return (
    <div className="container flex items-center justify-center min-h-[80vh]" id="servicios">
      <div className="py-20">
        <div className="max-w-[50rem] mx-auto mb-10">
          <h2 className="text-2xl lg:text-4xl text-center">¿Buscas un impulso digital para llevar tu negocio al siguiente nivel?</h2>
          <p className="text-lg mt-2 mb-6 font-light text-center text-gray-500">
            ¡Lo tenemos cubierto! Nuestros servicios digitales a medida están diseñados para convertir desafíos en oportunidades. Ya sea que
            seas un empresario novato o un veterano en el mundo digital, nuestros expertos en marketing están aquí para potenciar tu
            presencia en línea y aumentar tus conversiones.
          </p>
        </div>

        <div className={styles.Container}>
          <div className=" bg-gray-200 rounded-md lg:flex-[.25] max-w-[30rem]">
            <div className="relative w-full min-h-[18rem]">
              <Image src="/images/services/google-ads.webp" fill className="object-cover rounded-md" alt="benefit" />
            </div>
            <div className="p-6 text-center">
              <h4 className="text-lg font-semibold">Google ADS</h4>
              <p className="text-gray-500">
                ¿Quieres impulsar tus ventas, aumentar tu visibilidad y llegar directo a tu público objetivo? Google Ads es tu solución.
                Convierte búsquedas en clientes potenciales y maximiza tu retorno de inversión.
              </p>
            </div>
          </div>
          <div className=" bg-gray-200 rounded-md lg:flex-[.25] max-w-[30rem]">
            <div className="relative w-full min-h-[18rem]">
              <Image src="/images/services/edicion-video.webp" fill className="object-cover rounded-md" alt="benefit" />
            </div>
            <div className="p-6 text-center">
              <h4 className="text-lg font-semibold ">Edición de Video</h4>
              <p className="text-gray-500">
                ¿Estás listo para capturar la atención de tu audiencia en un abrir y cerrar de ojos? Nuestros servicios de edición de videos
                están diseñados para transformar tus ideas en historias cautivadoras que resuenan con tu público.
              </p>
            </div>
          </div>
          <div className=" bg-gray-200 rounded-md lg:flex-[.25] max-w-[30rem]">
            <div className="relative w-full min-h-[18rem]">
              <Image src="/images/services/marketing-strategy.webp" fill className="object-cover object-top rounded-md" alt="benefit" />
            </div>
            <div className="p-6 text-center">
              <h4 className="text-lg font-semibold">Estrategias de Marketing</h4>
              <p className="text-gray-500">
                ¡Eleva tu negocio al siguiente nivel al crear una estrategia de marketing sólida! Una estrategia de marketing sólida es la
                brújula que guía tu éxito en el competitivo mundo actual.Tu éxito está a un plan bien diseñado de distancia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Benefits;
