import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Community from "./pages/Community";

// Create a router for routes in your app
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Community />} />
      <Route path="/community" element={<Community />} />
    </>
  )
);

// renders React Component "Root" into the DOM element with ID "root"
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
