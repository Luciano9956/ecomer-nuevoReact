import React from "react";
import { Link } from 'react-router-dom';
import { GoMarkGithub } from "react-icons/go";
import { BsLinkedin} from "react-icons/bs";
import { FcUnlock } from "react-icons/fc";
import { FcInTransit } from "react-icons/fc";
import { FcCurrencyExchange } from "react-icons/fc";





const Footer = () => {

    return (
        <footer className="flex flex-col bg-black">
          <section  className="flex flex-row justify-between flex-wrap gap-2">
            <div  >
           <Link to='/'><img className='h-32' src={require('../Componentes/image/logo.png')} alt="logo" /></Link>
           </div>
           <div className="flex flex-col  p-12">
            <FcCurrencyExchange className="mx-auto text-2xl"/>
           <p className="text-white mb-3"> Elegi como pagar</p>
            <FcInTransit className="mx-auto text-2xl" />
            <p className="text-white mb-3">Envios a todo el pais</p>
            <FcUnlock className="mx-auto text-2xl" />
            <p className="text-white mb-3"> Tus datos protegidos</p>
           </div>
           </section>
           <section className="flex  justify-center ">
           <div>
           <a target="_blank" href="https://www.linkedin.com/in/luciano-morales-/">
            <BsLinkedin className="text-5xl  text-white " />
           </a>
           <a target="_blank" href="https://github.com/Luciano9956"> 
            <GoMarkGithub className="text-5xl text-white  " />
            </a>
            </div>
            </section>
            <h4 className="flex flex-row text-white  justify-center items-center text-xl" >Desarrollado por Luciano Morales </h4>
        </footer>
    )

}

export default Footer;
