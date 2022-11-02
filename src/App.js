import React from "react";
import "./App.css";
import {
  createBrowserRouter,
  Route,
  Router,
  RouterProvider,
  Routes
} from "react-router-dom";
import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";
import EditCity from "./components/dashboard/City/EditCity";
import AddCity from "./components/dashboard/City/AddCity";
import ProtectedRoutes from "./ProtectedRouter/ProtectedRoutes";

// const routers = [
//   {
//     path: "/",
//     element: <Login />,
//   },
//   {
//     path: "/dashboard",
//     element: <Dashboard />,
//   },
//   {
//     path: "/edit/:id",
//     element: <EditCity />,
//   },
//   {
//     path: "/add",
//     element: <AddCity />,
//   },
// ];
function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add" element={<AddCity />} />
        <Route path="/edit/:id" element={<EditCity />} />
      </Route>
      
      </Routes>
  );
}

export default App;
