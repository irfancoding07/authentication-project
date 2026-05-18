// import React, { useEffect } from "react"

// import { useNavigate } from "react-router-dom"

// import { useCookies } from "react-cookie"

// import axios from "axios"

// import { toast, ToastContainer } from "react-toastify"
// import "react-toastify/dist/ReactToastify.css"

// export default function Secret() {

//   const navigate = useNavigate()

//   const [cookies, , removeCookie] = useCookies(["jwt"])

//   useEffect(() => {

//     const verifyUser = async () => {

//       if (!cookies.jwt) {

//         navigate("/login")

//       } else {

//         try {

//           const { data } = await axios.get(
//             "http://localhost:4000",
//             {
//               withCredentials: true,
//             }
//           )

//           console.log(data)

//           if (!data.status) {

//             removeCookie("jwt", {
//               path: "/",
//             })

//             navigate("/login")

//           } else {

//             toast(`Hi ${data.user} 🦄`, {
//               theme: "dark",
//             })
//           }

//         } catch (err) {

//           console.log(err)

//           removeCookie("jwt", {
//             path: "/",
//           })

//           navigate("/login")
//         }
//       }
//     }

//     verifyUser()

//   }, [cookies, navigate, removeCookie])

//   const logOut = () => {

//     removeCookie("jwt", {
//       path: "/",
//     })

//     navigate("/login")
//   }

//   return (

//     <>

//       <div className="private">

//         <h1>Super Secret Page</h1>

//         <button onClick={logOut}>
//           Log out
//         </button>

//       </div>

//       <ToastContainer />

//     </>
//   )
// }










// import React, { useEffect } from "react"

// import { useNavigate } from "react-router-dom"

// import { useCookies } from "react-cookie"

// import axios from "axios"

// import { ToastContainer } from "react-toastify"
// import "react-toastify/dist/ReactToastify.css"

// export default function Secret() {

//   const navigate = useNavigate()

//   const [cookies, , removeCookie] = useCookies(["jwt"])

//   useEffect(() => {

//     const verifyUser = async () => {

//       try {

//         const { data } = await axios.get(
//           "http://localhost:4000",
//           {
//             withCredentials: true,
//           }
//         )

//         console.log(data)

//         if (!data.status) {

//           removeCookie("jwt", {
//             path: "/",
//           })

//           navigate("/login")
//         }

//       } catch (err) {

//         console.log(err)

//         removeCookie("jwt", {
//           path: "/",
//         })

//         navigate("/login")
//       }
//     }

//     if (!cookies.jwt) {

//       navigate("/login")

//     } else {

//       verifyUser()
//     }

//   }, [])

//   const logOut = () => {

//     removeCookie("jwt", {
//       path: "/",
//     })

//     navigate("/login")
//   }

//   return (

//     <>

//       <div className="private">

//         <h1>Super Secret Page 🔐</h1>

//         <button onClick={logOut}>
//           Log out
//         </button>

//       </div>

//       <ToastContainer />

//     </>
//   )
// }










import React, { useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { useCookies } from "react-cookie";

import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Secret() {

  const navigate = useNavigate();

  const [cookies, , removeCookie] = useCookies(["jwt"]);

  useEffect(() => {

    const verifyUser = async () => {

      if (!cookies.jwt) {

        navigate("/login");

      } else {

        try {

          const { data } = await axios.get(
            "http://localhost:4000",
            {
              withCredentials: true,
            }
          );

          console.log(data);

          if (!data.status) {

            removeCookie("jwt");

            navigate("/login");

          } else {

            toast(`Welcome User`, {
              position: "top-right",
            });
          }

        } catch (err) {

          console.log(err);

          removeCookie("jwt");

          navigate("/login");
        }
      }
    };

    verifyUser();

  }, [cookies, navigate, removeCookie]);

  const logOut = () => {

    removeCookie("jwt");

    navigate("/login");
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