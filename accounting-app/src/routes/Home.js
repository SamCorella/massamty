import { DataGrid } from "@mui/x-data-grid";
import ResponsiveAppBar from "../components/ResponsiveAppBar";

function Home() {
  const columns = [
    { field: "id", headerName: "User ID", flex: 1 },
    { field: "AccountName", headerName: "Account Name", flex: 1 },
    { field: "AccountNumber", headerName: "Account Number", flex: 1 },
    { field: "AccountDescription", headerName: "Account Description", flex: 1 },
    { field: "Balance", headerName: "Balance", flex: 1 },
  ];

  const rows = [];

  return (
    <div style={{ height: 400, width: "100%" }}>
      <ResponsiveAppBar />
      <h2>Chart of Accounts</h2>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
}

export default Home;
