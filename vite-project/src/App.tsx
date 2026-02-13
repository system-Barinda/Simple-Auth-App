import Dashboard from "./components/Dashboard";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import { Routes, Route } from "react-router-dom";
import ReactFunFacts from "./pages/ReactFunFacts";
import ToDoList from "./pages/ToDoList";

function App() {
  return (
    <>
      <Navbar />

      <main className="p-4 min-h-screen">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/fun-facts" element={<ReactFunFacts />} />
          <Route path="/ToDoList" element={<ToDoList />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
