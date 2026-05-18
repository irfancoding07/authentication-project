// import React from 'react'
// import { BrowserRouter, Routes, Route } from "react-router-dom"

// import Register from './pages/Register'
// import Login from './pages/Login'
// import Secret from './pages/Secret'

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path='/register' element={<Register />} />
//         <Route path='/login' element={<Login />} />
//         <Route path='/' element={<Secret />} />
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App









// 




// import React from "react";

// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";

// import Register from "./pages/Register";
// import Login from "./pages/Login";
// import Secret from "./pages/Secret";

// function App() {

//   return (

//     <BrowserRouter>

//       <Routes>

//         <Route
//           path="/"
//           element={<Secret />}
//         />

//         <Route
//           path="/register"
//           element={<Register />}
//         />

//         <Route
//           path="/login"
//           element={<Login />}
//         />

//       </Routes>

//     </BrowserRouter>
//   );
// }

// export default App;








import React, { useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { useCookies } from "react-cookie";

import axios from "axios";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Secret() {

  const navigate = useNavigate();

  const [cookies, , removeCookie] = useCookies(["jwt"]);

  useEffect(() => {

    const verifyUser = async () => {

      try {

        const { data } = await axios.get(
          "https://authentication-project-1-6e9r.onrender.com",
          {
            withCredentials: true,
          }
        );

        console.log(data);

        if (data.status) {

          console.log("User Verified");

        } else {

          removeCookie("jwt");

          window.location = "/login";
        }

      } catch (err) {

        console.log(err);

        removeCookie("jwt");

        window.location = "/login";
      }
    };

    verifyUser();

  }, []);

  const logOut = () => {

    removeCookie("jwt");

    window.location = "/login";
  };

  return (

    <>

      <div className="private">

        <h1>Super Secret Page 🔐</h1>

        <button onClick={logOut}>
          Log out
        </button>

      </div>

      <ToastContainer />

    </>
  );
}