// // import React, { useState, useEffect } from "react"
// // import axios from "axios"

// // import { Link, useNavigate } from "react-router-dom"

// // import { useCookies } from "react-cookie"

// // import { ToastContainer, toast } from "react-toastify"
// // import "react-toastify/dist/ReactToastify.css"

// // function Login() {

// //   const [cookies] = useCookies(["jwt"])

// //   const navigate = useNavigate()

// //   const [values, setValues] = useState({
// //     email: "",
// //     password: "",
// //   })

// //   useEffect(() => {

// //     if (cookies.jwt) {
// //       navigate("/")
// //     }

// //   }, [cookies, navigate])

// //   const generateError = (error) => {

// //     toast.error(error, {
// //       position: "bottom-right",
// //     })
// //   }

// //   const handleChange = (e) => {

// //     setValues({
// //       ...values,
// //       [e.target.name]: e.target.value,
// //     })
// //   }

// //   // const handleSubmit = async (event) => {

// //   //   event.preventDefault()

// //   //   try {

// //   //     const { data } = await axios.post(
// //   //       "http://localhost:4000/login",
// //   //       {
// //   //         ...values,
// //   //       },
// //   //       {
// //   //         withCredentials: true,
// //   //       }
// //   //     )

// //   //     console.log(data)

// //   //     if (data.errors) {

// //   //       const { email, password } = data.errors

// //   //       if (email) {
// //   //         generateError(email)
// //   //       }

// //   //       else if (password) {
// //   //         generateError(password)
// //   //       }

// //   //     } else {

// //   //       navigate("/")
// //   //     }

// //   //   } catch (err) {

// //   //     console.log(err)

// //   //     toast.error("Something went wrong")
// //   //   }
// //   // }


// //   const handleSubmit = async (event) => {

// //   event.preventDefault()

// //   try {

// //     const { data } = await axios.post(
// //       "http://localhost:4000/login",
// //       {
// //         ...values,
// //       },
// //       {
// //         withCredentials: true,
// //       }
// //     )

// //     console.log(data)

// //     if (!data.status) {

// //       generateError("Login failed")

// //     } else {

// //       navigate("/")
// //     }

// //   } catch (err) {

// //     console.log(err.response.data)

// //     toast.error(err.response.data.error)
// //   }
// // }

// //   return (

// //     <div className="container">

// //       <h2>Login to your Account</h2>

// //       <form onSubmit={handleSubmit}>

// //         <div>

// //           <label htmlFor="email">Email</label>

// //           <input
// //             type="email"
// //             name="email"
// //             placeholder="Email"
// //             value={values.email}
// //             onChange={handleChange}
// //           />

// //         </div>

// //         <div>

// //           <label htmlFor="password">Password</label>

// //           <input
// //             type="password"
// //             name="password"
// //             placeholder="Password"
// //             value={values.password}
// //             onChange={handleChange}
// //           />

// //         </div>

// //         <button type="submit">
// //           Submit
// //         </button>

// //         <span>
// //           Don't have an account?
// //           <Link to="/register"> Register </Link>
// //         </span>

// //       </form>

// //       <ToastContainer />

// //     </div>
// //   )
// // }

// // export default Login











 

// import React, { useState, useEffect } from "react"
// import axios from "axios"

// import { Link, useNavigate } from "react-router-dom"

// import { useCookies } from "react-cookie"

// import { ToastContainer, toast } from "react-toastify"
// import "react-toastify/dist/ReactToastify.css"

// function Login() {

//   const [cookies] = useCookies(["jwt"])

//   const navigate = useNavigate()

//   const [values, setValues] = useState({
//     email: "",
//     password: "",
//   })

//   useEffect(() => {

//     if (cookies.jwt) {
//       navigate("/")
//     }

//   }, [cookies, navigate])

//   const generateError = (error) => {

//     toast.error(error, {
//       position: "bottom-right",
//     })
//   }

//   const handleChange = (e) => {

//     setValues({
//       ...values,
//       [e.target.name]: e.target.value,
//     })
//   }

//   const handleSubmit = async (event) => {

//     event.preventDefault()

//     try {

//       const { data } = await axios.post(
//         "https://authentication-project-ht8h.onrender.com/login",
//         {
//           ...values,
//         },
//         {
//           withCredentials: true,
//         }
//       )

//       console.log(data)

//       if (!data.status) {

//         generateError("Login failed")

//       } else {

//         navigate("/")
//       }

//     } catch (err) {

//       console.log(err.response.data)

//       toast.error(err.response.data.error)
//     }
//   }

//   return (

//     <div className="container">

//       <h2>Login to your Account</h2>

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
//           Don't have an account?
//           <Link to="/register"> Register </Link>
//         </span>

//       </form>

//       <ToastContainer />

//     </div>
//   )
// }

// export default Login












import React, { useState, useEffect } from "react";
import axios from "axios";

import { Link, useNavigate } from "react-router-dom";

import { useCookies } from "react-cookie";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {

  const [cookies] = useCookies(["jwt"]);

  const navigate = useNavigate();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {

    if (cookies.jwt) {
      navigate("/");
    }

  }, [cookies, navigate]);

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
        "http://localhost:4000/login",
        {
          ...values,
        },
        {
          withCredentials: true,
        }
      );

      console.log(data);

      if (!data.status) {

        generateError("Login failed");

      } else {

        navigate("/");
      }

    } catch (err) {

      console.log(err.response.data);

      toast.error(err.response.data.error);
    }
  };

  return (

    <div className="container">

      <h2>Login to your Account</h2>

      <form onSubmit={handleSubmit}>

        <div>

          <label htmlFor="email">Email</label>

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={values.email}
            onChange={handleChange}
          />

        </div>

        <div>

          <label htmlFor="password">Password</label>

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
          Don't have an account?
          <Link to="/register"> Register </Link>
        </span>

      </form>

      <ToastContainer />

    </div>
  );
}

export default Login;