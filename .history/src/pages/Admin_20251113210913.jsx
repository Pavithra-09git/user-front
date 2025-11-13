// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import api from "../api";

// const Admin = () => {
//   const [users, setUsers] = useState([]);
//   const nav = useNavigate();

//   const loadUsers = async () => {
//     try {
//       const res = await api.get("/");
//       setUsers(res.data);
//       console.log(res.data);
//     } catch (error) {
//       alert(error.response?.data?.message);
//     }
//   };

//   useEffect(() => {
//     loadUsers();
//   }, []);

//   const deleteUser = async (id) => {
//     await api.delete(`/${id}`);
//     confirm("user deleted");
//     loadUsers();
//   };
//   return (
//     <div>
//       {users.map((user) => (
//         <p key={user._id}>
//           {user.name}-{user.role}
//           <br />
//           <button onClick={() => nav(`/edit/${user._id}`)}>edit</button>
//           <br />
//           <button onClick={() => deleteUser(user._id)}>delete</button>
//         </p>
//       ))}
//     </div>
//   );
// };

// export default Admin;


import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";
import "../index.css"; /

const Admin = () => {
  const [users, setUsers] = useState([]);
  const nav = useNavigate();

  const loadUsers = async () => {
    try {
      const res = await api.get("/");
      setUsers(res.data);
      console.log(res.data);
    } catch (error) {
      alert(error.response?.data?.message);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const deleteUser = async (id) => {
    await api.delete(`/${id}`);
    confirm("user deleted");
    loadUsers();
  };

  return (
    <div className="admin-wrapper">
      <div className="admin-container">
        <h2>Admin Dashboard</h2>

        {users.length === 0 ? (
          <p className="no-user">No users found</p>
        ) : (
          <div className="user-list">
            {users.map((user) => (
              <div className="user-card" key={user._id}>
                <p className="user-info">
                  <strong>{user.name}</strong> <span>({user.role})</span>
                </p>
                <div className="actions">
                  <button
                    className="edit-btn"
                    onClick={() => nav(`/edit/${user._id}`)}
                  >
                    Edit
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => deleteUser(user._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
