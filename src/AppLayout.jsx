// import { Outlet } from "react-router-dom";
// import Navbar from "./components/Navbar";
// const AppLayout = () => {
//   return (
//     <div>
//       <Navbar />
//       <main style={{ padding: "30px" }}>
//         <Outlet />
//       </main>
//     </div>
//   );
// };

// export default AppLayout;

import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

const AppLayout = () => {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
