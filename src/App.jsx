import React from 'react';
import NavBar from './Componentes/NavBar/NavBar';
import ItemListContainer from './Componentes/ItemListContainer';
import ItemDetailContainer from './Componentes/ItemDetailContainer';
import Footer from './Componentes/Footer'
import Cart from './Componentes/Cart';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import CartContext  from './context/CartContext';
import  { Form } from '../src/Componentes/form'

const App = () => {
  return (
    <BrowserRouter key={BrowserRouter.id}>
    <CartContext key={CartContext.id} > 
    <NavBar key={NavBar.id} />
    <Routes key={Routes.id} >
    <Route path="/" element={<ItemListContainer key={ItemListContainer.id} name = 'Nombre' />}/>
    <Route path="/category/:categoriaSelec" element={<ItemListContainer name ="Nombre 222"  />}/>
    <Route path="/item/:Id" element={<ItemDetailContainer />}/>
    <Route path="/cart" element={<Cart  />}/>
    <Route path="/form" element={<Form />} />  
    </Routes>
    <Footer />
    </CartContext>
    </BrowserRouter>
    
  );
}

export default App;
