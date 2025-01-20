import Home from "./pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from "./pages/blog";
import KVM from "./pages/articles/kvm";
import Navbar from "./components/navbar";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="pt-16"></div>
      <main className="bg-base-100">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/articles/kvm" element={<KVM />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}