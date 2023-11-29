import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import log_in from "./pages/logIn";
import signUp from "./pages/signUp";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="shadow" element={<Layout />}/>
        <Route index element={<Home />} />
        <Route path="contact/" element={<Contact />} />
        <Route path="about/" element={<About />} />
        <Route path="signup/" element={<signUp />} />
        <Route path="login/" element={<log_in />} />
      </Routes>
    </BrowserRouter>
  );
}