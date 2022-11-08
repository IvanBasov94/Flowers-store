import React from "react";
import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux";

import Home from "./pages/Home";
import FlowerPage from "./pages/FlowerPage";
import OrderPage from "./pages/OrderPage";
import Header from "./components/Header";

const App = () => {
   return (
      <Provider store={store}>
         <div className="app">
            <Header />
            <Routes>
               <Route path='/' element={<Home />} />
               <Route path='/app/:title' element={<FlowerPage />} />
               <Route path='/order' element={<OrderPage />} />
            </Routes>
         </div>
      </Provider>
   );
};

export default App;
