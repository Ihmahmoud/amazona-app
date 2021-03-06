import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <a className="brand" href="/">amazona</a>
          </div>
          <div>
            <a href="/card">Cart</a>
            <a href="/signin">Sign In</a>
          </div>
        </header>
        <main>
        
          <Routes>
          {/* <Route Path="/product/:id" component={ProductScreen}></Route> */}
            <Route path="/cart/:id" element={<CartScreen/>}/>
            <Route path="/" element={<HomeScreen/>} exact/>
            {/* <Route path="/" component={HomeScreen} exact></Route> */}
            <Route path="/product/:id" element={<ProductScreen/>}/>
          </Routes>
        </main>
        <footer className="row center">All right reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;