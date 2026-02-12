import Dashboard from "./components/Dashboard";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Routes>
      <Navbar />
      <main className="p-4">
        <Dashboard />
      </main>
      <Footer />
  </Routes>
    </>
  );
}

export default App;
