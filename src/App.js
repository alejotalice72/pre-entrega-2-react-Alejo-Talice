import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBarComponent from './components/NavBar/NavBarComponent';
import CardsView from './views/CardsView';
import DetailView from './views/DetailView';
import MyCardsView from './views/MyCardsView';
import { routes } from './routes';
import { useEffect, useState } from 'react';

function App() {

  const {root, detailView, myCardsView} = routes;

  const [cart, setCart] = useState([]);
  const [object, setObject] = useState([]);
  const handleCart = (cartItem) => {
    const objeto = cartItem[0];
    setObject(objeto);
  };
  useEffect(()=>{
    setCart(object);
  }, [object]);
  console.log(cart);
  
  return (
    <>
      <BrowserRouter>

        <NavBarComponent />
        
        <Routes>

          <Route exact path={root} element={<CardsView handleCart={handleCart} /> } />   
          <Route exact path={detailView} element={<DetailView /> } />   
          <Route exact path={myCardsView} element={<MyCardsView /> } />   

        </Routes>
      
      </BrowserRouter>
    </>
  );
}

export default App;