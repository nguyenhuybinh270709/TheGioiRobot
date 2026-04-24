import { Navbar } from "@/components/Navbar";
import Home from "@/pages/home/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen bg-[#0B0F14]">
      <Navbar />

      <div className="pt-18">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
