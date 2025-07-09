import React from "react";
import { Container, Typography } from "@mui/material";
import AnalyticsTable from "../components/AnalyticsTable";

const StatisticsPage = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <Typography variant="h4" gutterBottom align="center">
        📊 URL Analytics Dashboard
      </Typography>
      <AnalyticsTable />
    </Container>
  );
};

export default StatisticsPage;
