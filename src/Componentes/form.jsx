import React, { useState, useContext } from "react";
import { context } from '../context/CartContext';
import { db } from '../firebase/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { Link } from 'react-router-dom';
export const Form = () => {
    const { productosCarrito, clear, totalCompra } = useContext(context)
    const [idOrden, setIdOrden] = useState()
    const [loading, setLoading] = useState(false)
    const [buyer, setBuyer] = useState({
        Nombre: '',
        Email: ''
    })
    const { Nombre, Email } = buyer

    const Input = (e) => {
        setBuyer(({
            ...buyer,
            [e.target.name]: e.target.value
        }))
    }

    const generarPedido = async (data) => {
        try {
            const col = collection(db, 'ventas')
            const order = await addDoc(col, data)
            setIdOrden(order.id)
            clear()

        } catch (error) {
            return(
                error
            )
        }
    }

    const enviar = (e) => {
        e.preventDefault()
        const dia = serverTimestamp()
        const items = productosCarrito.map(e => { return { id: e.id, Titulo: e.title, Precio: e.price } })
        const total = totalCompra()
        const data = { buyer, dia, items, total }
        generarPedido(data)
    }

    return (
        <>
            {loading ? 
             <div  className="block m-auto">
             <div className="spinner-layer spinner-red-only">
               <div className="circle-clipper left">
                 <div className="circle"></div>
               </div><div className="gap-patch">
                 <div className="circle"></div>
               </div><div className="circle-clipper right">
                 <div className="circle"></div>
               </div>
             </div>
           </div>
                : (!idOrden && <div  className="flex flex-col justify-center w-full h-full items-center  ">
                    <form className="border-8 m-8 p-32 rounded border-double border-yellow-500" onSubmit={enviar}>
                        <div>
                            <h2 className="text-2xl font-bold mb-6"> Carga tus datos</h2>
                        </div>
                        <div>
                            <p>
                                <input className="border-2 mb-1 ring-indigo-500 border-indigo-500" type="text" name="Nombre" onChange={Input} value={Nombre} placeholder="Nombre" required />
                            </p>
                            <p>
                                <input className="border-2  ring-indigo-500 border-indigo-500" type="email" name="Email" onChange={Input} placeholder="Mail" value={Email} required />
                            </p>
                            <p>
                                <button className="relative bg-indigo-600 p-1 text-white cursor-pointer mt-6 " >
                                    Enviar
                                </button>
                            </p>
                        </div>
                    </form>
                </div>
                )
            }
            <div>
                {
                    idOrden && (
                        <div className="flex flex-col border-8 border-solid items-center border-slate-200 ">
                            <div className="m-8">
                            <h3 className="text-2xl font-bold" >¡Gracias por su Compra!</h3>
                            <p className="font-medium" >{`Su codigo de operacion es: ${idOrden}`}</p>
                            <p className="font-medium">{`Le enviarenos a ${Email} la factura electronica de su compra`}</p>
                            <div className="mt-6 right-1/2" >
                                <Link  className="relative bg-indigo-600 p-1 text-white cursor-pointer" to={'/'} >Realizar otra compra </Link></div>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    )

}
