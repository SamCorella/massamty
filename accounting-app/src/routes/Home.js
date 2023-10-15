import ResponsiveAppBar from "../components/ResponsiveAppBar";
import CrudGrid from "../components/CrudGrid";

function Home() {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <ResponsiveAppBar />
      <h2>Chart of Accounts</h2>
      <CrudGrid />
    </div>
  );
}

export default Home;
