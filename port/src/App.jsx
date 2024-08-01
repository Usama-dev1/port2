import React from "react";
import "./App.css";
import { Route,RouterProvider,createBrowserRouter,createRoutesFromElements } from "react-router-dom";
import MainLayout from "./mainlayout/MainLayout";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
    <Route index element={<HomePage/>}/>    
    <Route path="/services" element={<ServicesPage/>}/>    
    <Route path="/contact" element={<ContactPage/>}/>    
      </Route>
    )
  );
  return (
    <RouterProvider router={router}/>

  );
};

export default App;
