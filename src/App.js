import React from 'react';
import {Switch, Route} from 'react-router-dom';
//import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './Components/NavBar.js'
import ProductList from './Components/ProductList.js';
import Default from './Components/Default.js'
import Details from './Components/Details.js'
import Card from './Cart/Card.js'
import Modal from './Components/Modal.js'

function App() {
  return (
  
   <React.Fragment> 
    
    <NavBar />
    <Switch>  
      <Route exact path="/" component={ProductList} />    
      <Route path="/details" component={Details} />
      <Route path="/card" component={Card} />      
      <Route  component={Default} />
      img
    </Switch>
    <Modal />
   </React.Fragment> 
  );
}

export default App;
