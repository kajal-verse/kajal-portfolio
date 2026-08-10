import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />

      <main>
        <Hero />
        <About />
      </main>
    </div>
  );
}

export default App;