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




import React from "react";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Register from "./pages/Register";
import Login from "./pages/Login";
import Secret from "./pages/Secret";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Secret />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;