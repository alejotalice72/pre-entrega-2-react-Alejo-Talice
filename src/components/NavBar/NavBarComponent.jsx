import React from 'react';
import { routes } from '../../routes';
import NavBarOption from './NavBarOption';
import NavBarSearch from './NavBarSearch';
import NavBarBrand from './NavBarBrand';
import NavBarButton from './NavBarButton';

const NavBarComponent = () => {
  const { root, myCardsView } = routes;
  const navBarOptions = [{title: 'Inicio', route: root},{title: 'Mis Cartas', route: myCardsView}];
  return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container text-center">
            
            <NavBarBrand />

            <NavBarButton />
            
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                {navBarOptions.map((element, index)=>{
                  return <NavBarOption title={element.title} route={element.route} key={index} />;
                })}
              
              </ul>
              
              <NavBarSearch />

            </div>
            
          </div>
        </nav>
  );
};

export default NavBarComponent;