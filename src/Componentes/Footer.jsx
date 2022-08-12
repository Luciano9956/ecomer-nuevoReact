import React from "react";
import { GoMarkGithub } from "react-icons/go";
import { BsLinkedin} from "react-icons/bs";
import { FcUnlock } from "react-icons/fc";
import { FcInTransit } from "react-icons/fc";
import { FcCurrencyExchange } from "react-icons/fc";




const Footer = () => {

    return (
        <footer className="flex flex-col bg-black">
          <section  className="flex flex-row justify-between flex-wrap gap-2">
           <div className="flex justify-center p-12">
            <FcCurrencyExchange className=" text-2xl"/>
           <p className="text-white ">Elegi como pagar</p>
           </div> 
           <div className="flex justify-center p-12">
            <FcInTransit className="text-2xl" />
            <p className="text-white ">Envios a todo el pais</p>
           </div>
           <div className="flex justify-center p-12">
            <FcUnlock className="text-2xl" />
            <p className="text-white "> Tus datos protegidos</p>
           </div>
           </section>
           <section className="flex flex-wrap justify-center items-center">
           <div>
           <a target="_blank" href="https://www.linkedin.com">
            <BsLinkedin className="text-5xl  text-white " />
           </a>
           <a target="_blank" href="https://github.com"> 
            <GoMarkGithub className="text-5xl text-white  " />
            </a>
            </div>
            </section>
            <h4 className="flex flex-row text-white  justify-center items-center text-xl" >Desarrollado por Luciano Morales </h4>
        </footer>
    )

}

export default Footer;
