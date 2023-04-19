import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBarComponent from './components/NavBar/NavBarComponent';
import CardsView from './views/CardsView';
import DetailView from './views/DetailView';
import MyCardsView from './views/MyCardsView';
import { routes } from './routes';
// import { useState } from 'react';


function App() {

  const {root, detailView, myCardsView} = routes;
  // const [myCards, setMyCards] = useState([]); 

  return (
    <>
      <BrowserRouter>

        <NavBarComponent />
        
        <Routes>

          <Route exact path={root} element={<CardsView /> } />   
          <Route exact path={detailView} element={<DetailView /> } />   
          <Route exact path={myCardsView} element={<MyCardsView /> } />   

        </Routes>
      
      </BrowserRouter>
    </>
  );
}

export default App;