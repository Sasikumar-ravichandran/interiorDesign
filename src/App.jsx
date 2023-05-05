import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Gallery from './pages/gallery/Gallery'
import Contacts from './pages/contacts/Contact'
import Products from './pages/products/Products'
import NotFound from './pages/notFound/NotFound'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route index element={<Home />} />
          <Route path={'about'} element={<About />} />
          <Route path={'contacts'} element={<Contacts />} />
          <Route path={'products'} element={<Products />} />
          <Route path={'*'} element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
