//  import React, { useState, useEffect } from "react";
// import axios from "axios";

// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// import { useCookies } from "react-cookie";

// import { Link, useNavigate } from "react-router-dom";

// function Register() {

//   const [cookies] = useCookies(["jwt"]);

//   const navigate = useNavigate();

//   const [values, setValues] = useState({
//     email: "",
//     password: "",
//   });

//   useEffect(() => {

//     if (cookies.jwt) {
//       navigate("/");
//     }

//   }, [cookies, navigate]);

//   const generateError = (error) => {

//     toast.error(error, {
//       position: "bottom-right",
//     });
//   };

//   const handleChange = (e) => {

//     setValues({
//       ...values,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (event) => {

//     event.preventDefault();

//     try {

//       const { data } = await axios.post(
//         "http://localhost:4000/register",
//         {
//           ...values,
//         },
//         {
//           withCredentials: true,
//         }
//       );

//       console.log(data);

//       if (data.created) {

//         navigate("/");

//       } else {

//         generateError("Registration failed");
//       }

//     } catch (err) {

//       console.log(err.response.data);

//       toast.error(err.response.data.error);
//     }
//   };

//   return (

//     <div className="container">

//       <h2>Register Account</h2>

//       <form onSubmit={handleSubmit}>

//         <div>

//           <label htmlFor="email">Email</label>

//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={values.email}
//             onChange={handleChange}
//           />

//         </div>

//         <div>

//           <label htmlFor="password">Password</label>

//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={values.password}
//             onChange={handleChange}
//           />

//         </div>

//         <button type="submit">
//           Submit
//         </button>

//         <span>
//           Already have an account?
//           <Link to="/login"> Login</Link>
//         </span>

//       </form>

//       <ToastContainer />

//     </div>
//   );
// }

// export default Register;












import React, { useState } from "react";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Link, useNavigate } from "react-router-dom";

function Register() {

  const navigate = useNavigate();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const generateError = (error) => {

    toast.error(error, {
      position: "bottom-right",
    });
  };

  const handleChange = (e) => {

    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event) => {

    event.preventDefault();

    try {

      const { data } = await axios.post(
        "http://localhost:4000/register",
        {
          ...values,
        },
        {
          withCredentials: true,
        }
      );

      console.log(data);

      if (data.created) {

        navigate("/login");

      } else {

        generateError("Registration failed");
      }

    } catch (err) {

      console.log(err.response.data);

      toast.error(err.response.data.error);
    }
  };

  return (

    <div className="container">

      <h2>Register Account</h2>

      <form onSubmit={handleSubmit}>

        <div>

          <label>Email</label>

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={values.email}
            onChange={handleChange}
          />

        </div>

        <div>

          <label>Password</label>

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={values.password}
            onChange={handleChange}
          />

        </div>

        <button type="submit">
          Submit
        </button>

        <span>
          Already have an account?
          <Link to="/login"> Login</Link>
        </span>

      </form>

      <ToastContainer />

    </div>
  );
}

export default Register;