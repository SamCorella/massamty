import ResponsiveAppBar from "../components/ResponsiveAppBar";
import CrudGrid from "../components/CrudGrid";
import Typography from "@mui/material/Typography";
import Stack from '@mui/material/Stack';
import Item from '@mui/material/Stack';
import { db, auth } from "../index";

function Home() {
  /*const accountsRef = db.collection('accounts').doc();
  const assetsRef = accountsRef.where('Category', '==', 'Asset');
  const liabilityRef = accountsRef.where('Category', '==', 'Liability');

  const sumAssetQuery = assetsRef.aggregate({
    totalAssets: AggregateField.sum('Balance'),
  });

  const sumLiabilityQuery = liabilityRef.aggregate({
    totalLiability: AggregateField.sum('Balance'),
  });

  const currentRatio = sumAssetQuery.get()/sumLiabilityQuery.get();*/

  return (
    <div style={{ height: 400, width: "100%" }}>
      <ResponsiveAppBar />
      <h2>Chart of Accounts</h2>
      <CrudGrid />
      <Typography component="h1" variant="h5">
            Financial Ratios
      </Typography>
      <Stack direction="row" alignItems="center" justifyContent="space-evenly" spacing={2}>
      <Item>Current Ratio: currentRatio</Item>
      <Item>Cash Ratio: </Item>
      <Item>Debt Ratio: </Item>
      </Stack>
    </div>
  );
}

export default Home;
