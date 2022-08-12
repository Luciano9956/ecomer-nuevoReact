import React, { useContext } from "react";
import { FaShoppingCart } from 'react-icons/fa';
import { context } from "../../context/CartContext";

const CartWidget =  () => {

    const { qtyCompra } = useContext(context);

    return (
        <>
        <FaShoppingCart className="text-neutral-300" size={35}/> 
         { qtyCompra >= 1 ? <span className="absolute top-16 right-10 font-black text-red-500 " >{qtyCompra}</span> : null }
         </>
    )

}

export default CartWidget 
