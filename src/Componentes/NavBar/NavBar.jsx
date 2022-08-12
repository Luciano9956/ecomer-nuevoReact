import React from 'react'
import CartWidget from './CartWidget'
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {

  const categorias = [
    { name: "Notebook", id: 0, route: "/category/Notebook" },
    { name: "Placas de Video", id: 1, route: "/category/video" },
    { name: "Memorias Ram", id: 2, route: "/category/Ram" },
    { name: "Procesadores", id: 3, route: "/category/Procesadores" },
    { name: "Motherboard", id: 4, route: "/category/madre" },
  ];
  return (
    <header className='flex justify-between items-center relative h-40 bg-black'>
    <div  >
      
      <Link to='/'><img className='h-32' src={require('../image/logo.png')} alt="logo" /></Link>
    </div>
  <nav>

    {categorias.map((categoria) => <NavLink className={'pr-8 text-white font-bold hover:bg-gray-800'} key={categoria.id} to={categoria.route}>{categoria.name}</NavLink>)}


  </nav>
    <Link className='pr-8' to="/cart"> <CartWidget /> </Link>
  </header>
  )
}

export default NavBar
