import { useEffect, useState } from "react";
import { db } from "../index";
import Logo from "../components/Logo";
import { collection, getDocs, query, where } from "firebase/firestore";
import { DataGrid } from "@mui/x-data-grid";
import { useParams } from "react-router-dom";

function Ledger() {
  const [entryData, setEntryData] = useState([]);

  const accountId = useParams();

  useEffect(() => {
    const q = query(
      collection(db, "journal-entries"),
      where("id", "==", accountId)
    );

    const fetchEntryData = async () => {
      try {
        const entryCollection = await getDocs(q);
        const entryDataArray = entryCollection.docs.map((doc) => doc.data());
        setEntryData(entryDataArray);
      } catch (error) {
        console.error("Error fetching entry data:", error);
      }
    };

    fetchEntryData();
  }, []);

  const columns = [
    { field: "id", headerName: "Entry ID" },
    { field: "accounts", headerName: "Accounts Impacted", flex: 1 },
    { field: "debit", headerName: "Debit", flex: 1 },
    { field: "credit", headerName: "Credit", flex: 1 },
    { field: "date", headerName: "Date", flex: 1 },
  ];

  return (
    <div style={{ height: 400, width: "100%" }}>
      <Logo />
      <h2>Ledger</h2>
      <DataGrid
        rows={entryData}
        columns={columns}
        pageSize={10} // Set the number of rows per page as needed
      />
    </div>
  );
}

export default Ledger;
