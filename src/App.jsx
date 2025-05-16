import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import userRoutes from "./routes/userRoutes";


export default function App() {
  return (
    <Router>
      <Routes>
        {userRoutes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </Router>
  );
}
