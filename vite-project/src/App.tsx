import Dashboard from "./components/Dashboard";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main className="p-4">
        <Dashboard />
      </main>
      <Footer />
    </>
  );
}

export default App;
