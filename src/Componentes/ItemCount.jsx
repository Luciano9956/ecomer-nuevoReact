import React, { useState, useEffect } from 'react';

const ItemCount = ({stock, initial, onAdd}) => {
    const [contador, setContador] = useState (initial);

    useEffect ( () => {
        console.log('useEffect')
    });

    const sumar = () => {
        contador < stock && setContador(contador + 1)
       
    };

    const restar = () => {
        contador > initial && setContador(contador - 1)
        contador < initial && setContador (1)
    };

    const reset = () => {
        setContador(0);
    };
    const agregar = () =>{
        onAdd(contador);
    }

    return (
        <>

            <p className='font-bold p-9'>{contador}</p>
            <a className="bg-indigo-600 p-5 text-white cursor-pointer" onClick={restar}>-</a>
            <a className="bg-indigo-600 p-5 text-white cursor-pointer" onClick={sumar}>+</a>

            <a className="bg-indigo-500 p-5 text-white cursor-pointer" onClick={reset}>Reset</a>
            {contador >= 1 ?
                <a className="flex mt-6 bg-green-600 p-5 text-white cursor-pointer" onClick={agregar}>Agregar al Carrito</a> :
                <a className=" flex mt-6 bg-red-300 p-1 text-white" >Aun no agregaste productos</a>}


        </>
        )
}


export default ItemCount


