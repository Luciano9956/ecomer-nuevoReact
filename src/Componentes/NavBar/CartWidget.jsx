import React, { useContext } from "react";
import { FaShoppingCart } from 'react-icons/fa';
import { context } from "../../context/CartContext";

const CartWidget =  () => {

    const { qtyCompra } = useContext(context);

    return (
        <>
        <FaShoppingCart className="text-white" size={35}/> 
         { qtyCompra >= 1 ? <span className="absolute top-4 right-10 font-bold" >{qtyCompra}</span> : null }
         </>
    )

}

export default CartWidget 
