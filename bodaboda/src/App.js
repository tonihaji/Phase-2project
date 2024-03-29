import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Shop from "./Components/Shop";
// import Loans from "./Components/Loan";
import Remit from "./Components/Remit";

import Sign from "./Components/Sign";
import Footer from "./Components/Footer";
import Cart from "./Components/Cart";
import BookRider from "./Components/BookRider";


function App() {
  

  
 
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        
          <Route path="/" element={<Navigate to='/home' />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/remit" element={<Remit />} />
          <Route path="/bookrider" element={<BookRider/>} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/sign" element={<Sign />} />
           
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  );
}
export default App;