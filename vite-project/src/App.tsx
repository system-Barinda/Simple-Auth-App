import { useState } from 'react'

import Navbar from "./components/layout/Navbar.js";
import Footer from "./components/layout/Footer.js";
import DashBoard from "./components/Dashboard.js";

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
