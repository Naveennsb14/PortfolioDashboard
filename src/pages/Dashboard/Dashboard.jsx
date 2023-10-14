import { Grid, GridItem } from "@chakra-ui/react";
import DashboardLayout from "../../Components/DashboardLayout";
import PortfolioSection from "./components/PortfolioSection";
import PriceSection from "./components/PriceSection";
import Transactions from "./components/Transactions";

const Dashboard = () => {
  return (
    <DashboardLayout title="Dashboard">
      <Grid
      gridTemplateColumns={{
        base: "repeat(1, 1fr)",
        lg: "repeat(2, 1fr)",
      }}
      gap="6"
      >
        <GridItem colSpan={{
          base: 1,
          lg: 2,
        }}>
          <PortfolioSection />
        </GridItem>
        <GridItem colSpan={1}>
          <PriceSection />
        </GridItem>
        <GridItem colSpan={1}>
          <Transactions />
        </GridItem>
      </Grid>
    </DashboardLayout>
  );
};

export default Dashboard;
