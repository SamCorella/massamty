import { DataGrid } from "@mui/x-data-grid";
import { db } from "../index";
import {
  collection,
  doc,
  getDocs,
  setDoc,
  deleteDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";

// Hello
function EventLog() {
  const [events, setEventsData] = useState([]);
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userCollection = await getDocs(collection(db, "Events"));
        const eventsArray = userCollection.docs.map((doc) => doc.data());
        setEventsData(eventsArray);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUserData();
  }, []);

  const columns = [
    { field: "id", headerName: "User ID", flex: 1 },
    { field: "before", headerName: "Before", flex: 1 },
    { field: "after", headerName: "After", flex: 1 },
    { field: "date", headerName: "Date", flex: 1 },
  ];
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid autoHeight rows={events} columns={columns} pagesize={10} />
    </div>
  );
}
export default EventLog;
