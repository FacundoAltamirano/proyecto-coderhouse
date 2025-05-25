import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './componentes/NotFound/NotFound';
import { CarritoProvider } from './context/CarritoContext';
import Cart from './componentes/Cart/Cart';
import Admin from './componentes/Admin/Admin';
import { ToastContainer } from 'react-toastify';

const App = () => {

  return (
    <>
    
      <BrowserRouter>
      <CarritoProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path="/categoria/:idCategoria" element={<ItemListContainer />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/admin' element={<Admin />} />
          <Route path='*' element= {<NotFound/>}/>
        </Routes>
        </CarritoProvider>
        <ToastContainer/>
      </BrowserRouter>

    </>

  )
}

export default App
