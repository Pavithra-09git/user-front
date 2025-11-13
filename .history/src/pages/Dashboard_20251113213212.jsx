// import { useEffect, useState } from "react";
// import api from "../api";

// const Dashboard = () => {
//   const [user, setUser] = useState([]);
//   const loadUsers = async () => {
//     try {
//       const res = await api.get("/");
//       setUser(res.data);
//       console.log(res.data);
//     } catch (error) {
//       alert(error.response?.data?.message);
//     }
//   };

//   useEffect(() => {
//     loadUsers();
//   }, []);

//   if (user.role === "user") {
//     return (
//       <div>
//         {user.name}-{user.role}
//       </div>
//     );
//   } else {
//     const userArr = user?.filter((u) => u._id === localStorage.getItem("id"));
//     console.log(userArr);
//     return (
//       <div>
//         {userArr.map((user) => (
//           <p key={user._id}>
//             {user.name} - {user.role}
//           </p>
//         ))}
//       </div>
//     );
//   }
// };

// export default Dashboard;



import { useEffect, useState } from "react";
import api from "../api";
import "./Dashboard.css";

const Dashboard = () => {
  const [user, setUser] = useState([]);
  const loadUsers = async () => {
    try {
      const res = await api.get("/");
      setUser(res.data);
      console.log(res.data);
    } catch (error) {
      alert(error.response?.data?.message);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  if (user.role === "user") {
    return (
      <div className="dashboard">
        <div className="user-card">
          <h2>{user.name}</h2>
          <p className="role">{user.role}</p>
        </div>
      </div>
    );
  } else {
    const userArr = user?.filter((u) => u._id === localStorage.getItem("id"));
    console.log(userArr);
    return (
      <div className="dashboard">
        {userArr.map((user) => (
          <div key={user._id} className="user-card">
            <h2>{user.name}</h2>
            <p className="role">{user.role}</p>
          </div>
        ))}
      </div>
    );
  }
};

export default Dashboard;

