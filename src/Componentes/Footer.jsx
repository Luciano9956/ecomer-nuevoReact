import React from "react";
import { GoMarkGithub } from "react-icons/go";
import { BsLinkedin} from "react-icons/bs";
import { FcUnlock } from "react-icons/fc";
import { FcInTransit } from "react-icons/fc";
import { FcCurrencyExchange } from "react-icons/fc";




const Footer = () => {

    return (
        <footer className="flex flex-col bg-gradient-to-r from-cyan-500 via to-blue-500">
          <section  className="flex flex-row justify-between flex-wrap gap-2">
           <div className="flex justify-center p-12">
            <FcCurrencyExchange className="text-2xl"/>
           <p>Elegi como pagar</p>
           </div> 
           <div className="flex justify-center p-12">
            <FcInTransit className="text-2xl" />
            <p>Envios a todo el pais</p>
           </div>
           <div className="flex justify-center p-12">
            <FcUnlock className="text-2xl" />
            <p> Tus datos protegidos</p>
           </div>
           </section>
           <section className="flex flex-wrap justify-center items-center">
           <div>
           <a target="_blank" href="https://www.linkedin.com">
            <BsLinkedin className="text-5xl  " />
           </a>
           <a target="_blank" href="https://github.com"> 
            <GoMarkGithub className="text-5xl  " />
            </a>
            </div>
            </section>
            <h4 className="flex flex-row justify-center items-center text-xl" >Desarrollado por Luciano Morales </h4>
        </footer>
    )

}

export default Footer;
