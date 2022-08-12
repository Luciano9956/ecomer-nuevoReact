import React, { useContext } from "react";
import { context } from '../context/CartContext';
import { Link } from "react-router-dom";
import { FcShop } from "react-icons/fc";

const Cart = () => {

    const { removeItem, clear, totalCompra, productosCarrito } = useContext(context);

    return (
        <>
            {productosCarrito.length === 0 ? 
            <div className="p-11 gap-2">
                <FcShop  className="text-8xl" />
                <h3 className="text-2xl"> Aun no añadiste productos al Carrito </h3>
                <Link className="relative bg-indigo-600 p-1 text-white cursor-pointer" to="/">Ir a productos</Link>
            </div>
                : <div className="p-11 gap-2" >
                     <h1 className="text-2xl text-center pb-8"> Detalle de su carrito  </h1> {productosCarrito.map(item =>
                    <div className="grid border-2 shadow-xl mb-2 rounded ring-slate-100" key={item.id}>
                        <div className="grid grid-cols-5 gap-4">
                        <img className="flex scale-50 "  src={item.image} alt="" />                      
                         <p className="text-3xl text-center pt-10" id={item.id}> {item.title}  </p>
                        <p className="text-center text-xl pt-10"> {item.quantity} unidades</p>
                        <p className="text-center text-xl pt-10">${item.price * item.quantity}</p>
                        <button className=" bg-red-600 text-6xl text-white cursor-pointer scale-50" onClick={() => removeItem(item.id)}>Eliminar</button>
                        </div>
                    </div>
                )}
                    <div className="text-center pt-10 text-3xl ">Total Compra: $ {totalCompra()}</div>

                    <button className="relative mt-6  left-1/2  bg-indigo-600 p-1 text-white cursor-pointer" onClick={clear}> limpiar</button>
                    <button className="relative mt-6 ml-2 left-1/2 bg-indigo-600 p-1 text-white cursor-pointer"> <Link to={'/form'}>Finalizar compra</Link></button>
                </div>
                }
        </>
    )
}

export default Cart; 