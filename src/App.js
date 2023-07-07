import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import { Home } from "./pages/Home";
import {Tco} from "./pages/Tco"
import { PropagateLoader } from "react-spinners";

const App = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "Tco", element: <Tco/>}
  ]);
  return routes;
};

const AppWrapper = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <Router>
      {loading ? (
        <PropagateLoader color={"#3d2514"} loading={loading} size={40} />
      ) : (
        <App />
      )}
    </Router>
  );
};

export default AppWrapper;
