import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
// Components
import {
  Layout,
  ProtectedRoute,
  Login,
  Register,
  SignUpFormTwo,
  SignUpFormThree,
  SignUpFormFour,
  Welcome
} from "./components/index.js";
// Pages
import { Orders, Upload, Products } from "./pages/index.js";
import Home from "./components/Home/Home.jsx";
////////////////////
function App() {
  const [currentForm, setCurrentForm] = useState("login");
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  const routes = createBrowserRouter([
    { path: "/", element: <Welcome /> },
    {
      path: "/layout",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        // { path:'/layout',exact: true, element: <Home /> },
        { path: '/layout/product', element: <Products /> },
        { path: "/layout/orders", element: <Orders /> },
        { path: "/layout/upload", element: <Upload /> },
      ],
    },
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <Register /> },
    { path: "/signupTwo", element: <SignUpFormTwo /> },
    { path: "/signupThree", element: <SignUpFormThree /> },
    { path: "/signupFour", element: <SignUpFormFour /> },
  ]);
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
