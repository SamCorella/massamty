import { db } from "../index";
import Logo from "../components/Logo";
import { collection, addDoc } from "firebase/firestore";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import CancelIcon from "@mui/icons-material/Cancel";
import Stack from "@mui/material/Stack";
import AccountSelect from "../components/AccountSelect";
import { useNavigate } from "react-router-dom";

function IconLabelButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="outlined" startIcon={<DeleteIcon />}>
        Reset
      </Button>
      <Button variant="contained" endIcon={<SendIcon />} type="submit">
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
    <div>
      <AccountSelect id="account1" name="account1" label="Account 1" />
      <TextField
        id="outlined-Debit"
        name="outlined-Debit"
        label="Debit"
        helperText="Must have as least 1"
      />
      <AccountSelect id="account2" name="account2" label="Account 2" />
      <TextField
        id="outlined-Credit"
        name="outlined-Credit"
        label="Credit"
        helperText="Must have as least 1"
      />
      <TextField
        id="outlined-Date"
        name="outlined-Date"
        label="Date"
        defaultValue="xx/xx/xxxx"
      />
    </div>
  );
}

export default function JournalEntry() {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const debit = data.get("outlined-Debit");

    try {
      await addDoc(collection(db, "journal-entries"), {
        account1: data.get("account1"),
        account2: data.get("account2"),
        debit: data.get("outlined-Debit"),
        credit: data.get("outlined-Credit"),
        date: data.get("outlined-Date"),
      });
    } catch (error) {
      console.error("Error adding document: ", error);
    }
    navigate("/Home");
    console.log(debit);
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "50ch" },
      }}
      onSubmit={handleSubmit}
      noValidate
      autoComplete="off"
    >
      <Logo />
      <FormPropsTextFields></FormPropsTextFields>
      <IconLabelButtons></IconLabelButtons>
    </Box>
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
