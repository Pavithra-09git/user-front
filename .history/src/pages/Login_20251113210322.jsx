// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import api from "../api";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const nav = useNavigate();

//   const submit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await api.post("/api/login", { email, password });
//       localStorage.setItem("accessToken", res.data.accessToken);
//       localStorage.setItem("refreshToken", res.data.refreshToken);
//       localStorage.setItem("role", res.data.role);
//       localStorage.setItem("id", res.data.id);
//       nav(res.data.role === "admin" ? "/admin" : "/");
//       console.log(res.data);
//     } catch (error) {

//       alert(error.response?.data?.message);
//     }
//   };

//   return (
//     <>
//       <form onSubmit={submit}>
//         <h2>Login</h2>
//         <input
//           placeholder="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           placeholder="password"
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="submit">Login</button>
//         <p>
//           No account?
//           <span>Register</span>
//         </p>
//       </form>
//     </>
//   );
// };

// export default Login;
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";
import ""; 

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const nav = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/api/login", { email, password });
      localStorage.setItem("accessToken", res.data.accessToken);
      localStorage.setItem("refreshToken", res.data.refreshToken);
      localStorage.setItem("role", res.data.role);
      localStorage.setItem("id", res.data.id);
      nav(res.data.role === "admin" ? "/admin" : "/");
      console.log(res.data);
    } catch (error) {
      alert(error.response?.data?.message);
    }
  };

  return (
    <div className="login-wrapper">
      <form onSubmit={submit} className="login-form">
        <h2>Welcome Back</h2>
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        <p>
          No account? <span>Register</span>
        </p>
      </form>
    </div>
  );
};

export default Login;
