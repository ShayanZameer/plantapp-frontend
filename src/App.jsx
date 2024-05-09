import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { lazy } from "react";
import Loader from "./components/Loader";
import Login from "./pages/Login";




const Products = lazy(() => import("./pages/Products"));
const Orders = lazy(() => import("./pages/Orders"));
const Users = lazy(() => import("./pages/Users"));
const Charts = lazy(() => import("./pages/Charts"));


const Home = lazy(() => import("./components/Home/Home"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>

        <Route path="/" element={<Login/>} /> 
          {/* <Route path="/" element={<Home />} />    */}
          <Route path="/dashboard" element={<Home />} />   
          <Route path="/admin/products" element={<Products />} />
          <Route path="/admin/orders" element={<Orders />} />
          <Route path="/admin/users" element={<Users />} />
          <Route path="/admin/charts" element={<Charts/> } />
          
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;



