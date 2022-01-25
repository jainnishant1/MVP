// import React from 'react';
// import { BrowserRouter, Route } from 'react-router-dom';
// import Product from './components/Product';
// import data from './data';
// function App() {
//   return (
//     <div className="grid-container">
//       <header className="row">
//         <div>
//           <a className="brand" href="/">
//             amazona
//           </a>
//         </div>
//         <div>
//           <a href="/cart">Cart</a>
//           <a href="/signin">Sign In</a>
//         </div>
//       </header>
//       <main>
//         <div>
//           <div className="row center">
//             {data.products.map((product) => (
//               <Product key={product._id} product={product}></Product>
//             ))}
//           </div>
//         </div>
//       </main>
//       <footer className="row center">All right reserved</footer>
//     </div>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

function App() {
  return (
    <BrowserRouter>
      
        <div className="grid-container">
          <header className="row">
            <div>
              <a className="brand" href="/">
                amazona
              </a>
            </div>
            <div>
              <a href="/cart">Cart</a>
              <a href="/signin">Sign In</a>
            </div>
          </header>
          <main>
            <Route path="/product/:id" component={ProductScreen}></Route>
            <Route path="/" component={HomeScreen} exact></Route>
          </main>
          <footer className="row center">All right reserved</footer>
        </div>
    </BrowserRouter>
  );
}

export default App;
