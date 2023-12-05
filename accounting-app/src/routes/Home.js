import ResponsiveAppBar from "../components/ResponsiveAppBar";
import CrudGrid from "../components/CrudGrid";
import Typography from "@mui/material/Typography";
import Stack from '@mui/material/Stack';
import Item from '@mui/material/Stack';
import { db, auth} from "../index";
import {
  collection,
  query,
  doc,
  getDoc,
  getDocs,
  where,
  on,
  AggregateField,
} from "firebase/firestore";

function Home() {
  /*const accountsRef = collection(db, 'accounts');
  const assetsRef =  query(accountsRef, where('category', '==', 'asset'));
  const liabilityRef = query(accountsRef, where('category', '==', 'liability'));

  const sumAsset = 0;
  const sumLiability = 0;

  const sumAssetsAggregateQuery = assetsRef.aggregate({
    totalAssets: AggregateField.sum('balance'),
  });

  const sumLiabilitiesAggregateQuery = liabilityRef.aggregate({
    totalLiabilities: AggregateField.sum('balance'),
  });

  sumAsset = totalAssets;
  sumLiability = totalLiabilities;*/

  const currentRatio = 545/250;
  const cashRatio = 500/200;
  const debtRatio = 200/300;
  const assetTurnoverRatio = 480/150;
  

  return (
    <div style={{ height: 400, width: "100%" }}>
      <ResponsiveAppBar />
      <h2>Chart of Accounts</h2>
      <CrudGrid />
      <Typography component="h1" variant="h5">
            Financial Ratios
      </Typography>
      <Stack direction="row" alignItems="center" justifyContent="space-evenly" spacing={2}>
      <Item>Current Ratio: {currentRatio} %</Item>
      <Item>Cash Ratio: {cashRatio} %</Item>
      <Item>Debt Ratio: {debtRatio} %</Item>
      <Item>Asset Turnover Ratio {assetTurnoverRatio} %</Item>
      </Stack>
    </div>
  );
}

export default Home;
