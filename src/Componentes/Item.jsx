import React from "react";
import { Link } from "react-router-dom";



const Item = ({ producto }) => {

  return (
   
 <div className="flex-wrap  my-8 ml-14 mr-14 justify-center p-4 bg-white shadow-xl rounded-3xl" >
      <div className="flex justify-around flex-col">
      <div className="flex flex-col justify-center p-3 w-full h-2/4 ring-2 ring-slate-100 ">
        <img className="h-52 w-52 block justify-center m-auto" src={producto.image} alt="producto" />
      </div>
      <div>
        <h3 className="text-2xl">
        {producto.title}
        </h3>
          <span className="text-lg font-bold px-14">${producto.price}</span>
          <span className=" group relative bg-indigo-600 p-1 text-white cursor-pointer"><Link to={`/item/${producto.id}`} >Mas detalles</Link></span>
      </div>
      </div>
    </div> 
  )
}

export default Item
