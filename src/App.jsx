import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';

const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer mensaje="¡Bienvenidos a nuestra tienda!" />
    </>

  )
}

export default App
