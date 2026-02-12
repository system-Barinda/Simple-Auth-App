import Dashboard from "./components/Dashboard";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import { Routes, Route } from "react-router-dom";
import ReactFunFacts from "./pages/ReactFunFacts";

function App() {
  return (
    <>
      <Navbar />

      <main className="p-4 min-h-screen">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/fun-facts" element={<ReactFunFacts />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
