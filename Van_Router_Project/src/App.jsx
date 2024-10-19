
import './App.css'
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Vans from './pages/Vans/Vans'
import VanDetails from "./pages/Vans/VanDetails"
import "./server"
import Layout from './components/Layout'
import Dashboard from './pages/Host/Dashboard'
import Invoice from './pages/Host/Invoice'
import Reviews from './pages/Host/Reviews'

function App() {


  return (
    <BrowserRouter>

      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VanDetails />} />
          <Route path="/host" element={<Dashboard />} />
          <Route path="/host/invoice" element={<Invoice />} />
          <Route path="/host/reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
