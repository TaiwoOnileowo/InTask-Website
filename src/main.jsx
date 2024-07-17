import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router-dom";
// import Layout from "./components/Layout/Layout.jsx";
import Error from "./components/Error.jsx";
import { RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Signup from "./pages/Signup.jsx";
import {createHashRouter} from "react-router-dom"
const router = createBrowserRouter([
  {
    path: "/",
    // element: <Layout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "/signup", element: <Signup /> },
      // { path: "register", element: <Register /> },
      // { path: "login", element: <Login /> },
      // { path: "profile/:id", element: <UserProfile /> },
      // { path: "authors", element: <Authors /> },
      // { path: "create", element: <CreatePost /> },
      // { path: "posts/categories/:category", element: <CategoryPosts /> },
      // { path: "posts/users/:id", element: <AuthorPosts /> },
      // { path: "myposts/:id", element: <Dashboard /> },
      // { path: "posts/:id/edit", element: <EditPost /> },
      // { path: "posts/:id/delete", element: <DeletePosts /> },
      // { path: "logout", element: <LogOut /> },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
