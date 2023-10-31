import { DataGrid } from "@mui/x-data-grid";

function EventLog() {
    const columns = [
        { field: "id", headerName: "User ID", flex: 1 },
        { field: "before", headerName: "Before", flex: 1 },
        { field: "after", headerName: "After", flex: 1 },
        { field: "date", headerName: "Date", flex: 1 },
    ];
    return (
        <div style={{ height: 400, width: "100%" }}>
            <DataGrid
            columns = {colums}
            />
        </div>
    );
};
export default EventLog;