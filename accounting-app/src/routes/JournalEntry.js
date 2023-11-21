import { db } from "../index";
import Logo from "../components/Logo";
import { collection, getDocs } from "firebase/firestore";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import CancelIcon from "@mui/icons-material/Cancel";
import Stack from "@mui/material/Stack";
import AccountSelect from "../components/AccountSelect";

function IconLabelButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="outlined" startIcon={<DeleteIcon />}>
        Reset
      </Button>
      <Button variant="contained" endIcon={<SendIcon />} href="/Home">
        Submit
      </Button>
      <Button variant="text" endIcon={<CancelIcon />} href="/Home">
        Cancel
      </Button>
    </Stack>
  );
}

function FormPropsTextFields() {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "50ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <AccountSelect label="Account 1" />
      <TextField
        id="outlined-Debit"
        label="Debit"
        helperText="Must have as least 1"
      />
      <AccountSelect label="Account 2" />
      <TextField
        id="outlined-Credit"
        label="Credit"
        helperText="Must have as least 1"
      />
      <TextField id="outlined-Date" label="Date" defaultValue="xx/xx/xxxx" />
    </Box>
  );
}

export default function JournalEntry() {
  return (
    <div>
      <Logo />
      <FormPropsTextFields></FormPropsTextFields>
      <IconLabelButtons></IconLabelButtons>
    </div>
  );
}
/*// Ledger.js code
function JournalEntry() { //begin ledger.js
  const [entryData, setEntryData] = useState([]);

  useEffect(() => {
    const fetchEntryData = async () => {
      try {
        const entryCollection = await getDocs(
          collection(db, "journal-entries")
        );
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
    { field: "amount", headerName: "Amount Changed", flex: 1}
  ];

  return (
    <div style={{ height: 400, width: "100%" }}>
      <Logo />
      <h2>JournalEntry</h2>
      <DataGrid
        rows={entryData}
        columns={columns}
        pageSize={10} // Set the number of rows per page as needed
      />
    </div>
  );
}

export default JournalEntry;*/
