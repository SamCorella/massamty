import { useEffect, useState } from "react";
import { db } from "../index";
import Logo from "../components/Logo";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  or,
  where,
} from "firebase/firestore";
import { DataGrid } from "@mui/x-data-grid";
import { useParams } from "react-router-dom";

function Ledger() {
  const [entryData, setEntryData] = useState([]);

  const { accountId } = useParams();
  useEffect(() => {
    const fetchQueryData = async () => {
      const accountRef = doc(db, "accounts", accountId);
      const accountSnap = await getDoc(accountRef);
      const accountName = accountSnap.data().accountName;

      const entriesRef = collection(db, "journal-entries");
      const q = query(
        entriesRef,
        or(
          where("account1", "==", accountName),
          where("account2", "==", accountName)
        )
      );

      const querySnapshot = await getDocs(q);
      const entryDataArray = querySnapshot.docs.map((doc) => doc.data());
      setEntryData(entryDataArray);
    };

    fetchQueryData();
  }, [accountId]);

  const columns = [
    { field: "id", headerName: "Entry ID" },
    { field: "account1", headerName: "Account1", flex: 1 },
    { field: "debit", headerName: "Debit", flex: 1 },
    { field: "account2", headerName: "Account2", flex: 1 },
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
