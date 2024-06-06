import "./style.css";
import TextUtils from "./components/TextUtils";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import React, { useState } from "react";
import About from "./components/About";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const [bgmode, setBgMode] = useState("light");
  const [txmode, setTxMode] = useState("dark");
  const [alert, setAlert] = useState(null);


  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (bgmode === "light") {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";

      setBgMode("dark");
      setTxMode("light");
      showAlert("Black mode enable.", "success");
    } else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      setBgMode("light");
      setTxMode("dark");
      showAlert("Light mode enable.", "success");
    }
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <>        
      <Navbar
        title="TextUtils"
        bgMode={bgmode}
        txMode={txmode}
        toggleMode={toggleMode}
      />
        <Alert alert={alert} />
        <TextUtils showAlert={showAlert} /></>
    },
    {
      path: "/about",
      element: <><Navbar
        title="TextUtils"
        bgMode={bgmode}
        txMode={txmode}
        toggleMode={toggleMode}
      />
        <Alert alert={alert} /><About /></>
    },

  ])

  return (
    <>

      <RouterProvider router={router} />
    </>
  );
}

export default App;
