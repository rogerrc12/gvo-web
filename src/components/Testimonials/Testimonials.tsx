import TestimonialItem from "./Testimonialitem";

const testimonials = [
  {
    description:
      "Construimos excelentes relaciones y colaboraciones para proyectos que fueron un reto y hoy son realidad. Gracias a todo el equipo de GVO.",
    name: "Bayron Rodezno",
    position: "CEO de DevTech",
    rewiew: 3,
    image: "/images/testimonials/bayron.webp",
  },
  {
    description: "Hemos ido creciendo en relaciones, hoy en día tenemos un buen networking que cuidamos diariamente. Buen servicio.",
    name: "Aaron Aguirre",
    position: "Fundador y CEO de Instakash S.A.C",
    image: "/images/testimonials/aaron.webp",
    rewiew: 3,
  },
  {
    description:
      "No había entendido la importancia de exponer tu negocio adecuadamente. Hoy seguimos aprendiendo y llegando los resultados. Gracias han sido de ayuda. ",
    name: "Giovanni Rivera",
    position: "CEO de Novonetworks",
    image: "/images/testimonials/giovanni.webp",
    rewiew: 3,
  },
];

function Testimonials() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center h-full py-20" id="testimonios">
      <div className="container">
        <div className="h-full text-center flex flex-col items-center justify-center">
          <h2 className="text-2xl lg:text-4xl font-[500]">Ellos hablan por nosotros</h2>
          <p className="mt-4 text-gray-500 text-lg max-w-4xl">
            Se como uno de ellos y potencia tu éxito empresarial con nuestros servicios digitales.
          </p>
        </div>
        <div className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialItem
                key={index}
                description={testimonial.description}
                name={testimonial.name}
                position={testimonial.position}
                rewiew={testimonial.rewiew}
                image={testimonial.image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
