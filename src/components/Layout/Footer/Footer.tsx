import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

import { SOCIAL_LINKS } from "@/constants/SOCIAL_LINKS";

import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={`h-full ${styles.Footer}`}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 text-white  py-20">
          <div className="col-span-1">
            <h4 className="uppercase text-lg font-semibold">Accesos Rápidos</h4>
            <ul className="mt-6">
              <li className="mb-3">
                <a href="#servicios">Sobre los servicios</a>
              </li>
              <li className="mb-3">
                <a href="#expansion">Expansión B2B</a>
              </li>
              <li className="mb-3">
                <a href="#contacto">Contacto</a>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h4 className="uppercase text-lg font-semibold">Legal</h4>
            <ul className="mt-6">
              <li className="mb-3">
                <a href="#">Información legal</a>
              </li>
              <li className="mb-3">
                <a href="#">Términos y condiciones</a>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h4 className="uppercase text-lg font-semibold">Contacto</h4>
            <ul className="mt-6">
              <li className="mb-3">
                <p>1345 Av. Arequipa, Lima, Perú</p>
              </li>
              <li className="mb-3">
                <a href="mailto:ventas@gvobpo.com">ventas@gvobpo.com</a>
              </li>
              <li className="mb-3">
                <a href="tel:+51966326162">(+51) 966 326 162</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-purple-900 p-5">
        <div className="container flex flex-wrap gap-6 items-center justify-between">
          <p className="text-white">© 2023 GVO Gold Group. Todos los derechos reservados.</p>
          <div className="flex items-center gap-3">
            <a href={SOCIAL_LINKS.facebook} className="cursor-pointer" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="w-5 h-5 text-white" />
            </a>
            <a href={SOCIAL_LINKS.linkedin} className="cursor-pointer" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="w-5 h-5 text-white" />
            </a>
            <a href={SOCIAL_LINKS.instagram} className="cursor-pointer" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
