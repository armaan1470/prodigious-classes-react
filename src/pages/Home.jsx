import { useState } from "react";
import "../styles/Home.css";
import Navbar from "../components/Navbar";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="Home">
      <Navbar></Navbar>
    </div>
  );
}

export default Home;
