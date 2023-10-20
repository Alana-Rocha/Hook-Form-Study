import { useEffect, useState } from "react";
import "./App.css";
import { HomePage } from "./pages/HomePage";

function App() {
  const [email, setEmail] = useState("");

  useEffect(() => {
    console.log("Renderizei!");
  }, [email]);

  return <HomePage />;
}

export default App;
