import { useState } from 'react'

import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";
import DashBoard from "./components/Dashboard.jsx";

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <DashBoard />
      <Footer />
    </>
  )
}

export default App
