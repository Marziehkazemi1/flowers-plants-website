import React from "react";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import Gallery from "./pages/gallery/Gallery";
import Home from "./pages/home/Home";
import NotFound from "./pages/notFound/NotFound"
import { BrowserRouter , Route , Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return(
    <>
    <BrowserRouter>
        <Navbar />      
            <Routes>
                <Route index element={<Home />} />
                <Route path="about" element={<About />}/>
                <Route path="contact" element={<Contact />} />
                <Route path="gallery" element={<Gallery />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
           <Footer />
    </BrowserRouter>
      
    </>
  )
}

export default App