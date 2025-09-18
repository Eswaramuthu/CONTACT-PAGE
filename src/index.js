import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./navbar";
import Contact from "./contact";
import Content1 from "./content1";
import Footer from "./footer";
import "./index.css";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Contact />
        <Content1 />
      </main>
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

