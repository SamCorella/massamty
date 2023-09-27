import { useEffect, useState } from "react";
import { db } from "../index";
import Logo from "../components/Logo";
import { collection, getDocs } from "firebase/firestore";
import { DataGrid } from "@mui/x-data-grid";

function Dashboard() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userCollection = await getDocs(collection(db, "users"));
        const userDataArray = userCollection.docs.map((doc) => doc.data());
        setUserData(userDataArray);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  const columns = [
    { field: "id", headerName: "User ID", flex: 1 },
    { field: "first", headerName: "First Name", flex: 1 },
    { field: "last", headerName: "Last Name", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "role", headerName: "Role", flex: 1 },
  ];

  return (
    <div style={{ height: 400, width: "100%" }}>
      <Logo />
      <DataGrid
        rows={userData}
        columns={columns}
        pageSize={10} // Set the number of rows per page as needed
      />
    </div>
  );
}

export default Dashboard;
