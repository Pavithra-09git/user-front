// import React, { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import api from "../api";

// const EditUser = () => {
//   const { id } = useParams();
//   const nav = useNavigate();
//   const [form, setForm] = useState({
//     name: "",

//     imageUrl: "",
//   });

//   useEffect(() => {
//     const getUser = async () => {
//       const res = await api.get(`/profile/${id}`);
//       setForm(res.data);
//       console.log(res.data);
//     };
//     getUser();
//   }, []);

//   const change = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const submit = async (e) => {
//     e.preventDefault();
//     await api.put(`/${id}`, form);
//     nav("/admin");
//   };
//   return (
//     <div>
//       <form onSubmit={submit}>
//         <input
//           placeholder="name"
//           name="name"
//           value={form.name}
//           onChange={change}
//         />

//         <input
//           placeholder="imageUrl"
//           name="imageUrl"
//           value={form.imageUrl}
//           onChange={change}
//         />
//         <button type="submit">edit</button>
//       </form>
//     </div>
//   );
// };

// export default EditUser;


import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api";
import "./EditUser.css"; // 

const EditUser = () => {
  const { id } = useParams();
  const nav = useNavigate();
  const [form, setForm] = useState({
    name: "",
    imageUrl: "",
  });

  useEffect(() => {
    const getUser = async () => {
      const res = await api.get(`/profile/${id}`);
      setForm(res.data);
      console.log(res.data);
    };
    getUser();
  }, []);

  const change = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();
    await api.put(`/${id}`, form);
    nav("/admin");
  };

  return (
    <div className="edit-wrapper">
      <form onSubmit={submit} className="edit-form">
        <h2>Edit User</h2>

        <input
          placeholder="Name"
          name="name"
          value={form.name}
          onChange={change}
        />

        <input
          placeholder="Image URL"
          name="imageUrl"
          value={form.imageUrl}
          onChange={change}
        />

        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditUser;
