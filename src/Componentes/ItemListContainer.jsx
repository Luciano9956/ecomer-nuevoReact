import React, { useState, useEffect } from "react";
import Itemlist from "./ItemList";
import { useParams } from 'react-router-dom';
import { db } from '../firebase/firebase';
import { getDocs, collection, query, where } from 'firebase/firestore'
import { CSpinner } from '@coreui/react'

const ItemListContainer = (prop) => {

  const { categoriaSelec } = useParams();
  const { name } = prop;
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {

    const consulta = categoriaSelec
      ? query(collection(db, 'productos'), where('category', '==', categoriaSelec))
      : collection(db, 'productos');

    getDocs(consulta)
      .then(result => {
        const lista = result.docs.map(doc => {
          return {
            id: doc.id,
            ...doc.data()
          }
        })
        setProductos(lista);
      })
      .catch(error  => (error))
      .finally(() => setLoading(false))
  }, [categoriaSelec]);


  return (
    <section className=" bg-slate-100 flex flex-col">
      <img className='h-60' src={require('../Componentes/image/banner1.png')} alt="logo" />
      <div>
        <h2 className="text-center font-semibold bg-red-600">
          En {name} juga a lo grande
        </h2>

      </div>
      <div className="flex flex-row flex-wrap justify-between gap-5">
        {loading ?
          <div  className="block m-auto">
            <CSpinner color="warning"/>
          </div>
          : <Itemlist key={Itemlist.id} productos={productos} />}
      </div>

    </section>
  )
}

export default ItemListContainer

{/* <>
  
{loading ? <p>cargando...</p> : <Itemlist productos={productos} />}


</> */}

