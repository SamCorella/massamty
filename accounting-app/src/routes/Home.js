import ResponsiveAppBar from "../components/ResponsiveAppBar";
import CrudGrid from "../components/CrudGrid";
import Button from '@mui/material/Button';

function Home() {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <ResponsiveAppBar />
      <Button variant="contained" href="/JournalEntry">
        Create Journal Entry
      </Button>
      <h2>Chart of Accounts</h2>
      <CrudGrid />
    </div>
  );
}

export default Home;
