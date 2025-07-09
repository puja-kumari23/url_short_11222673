import React from "react";
import { Container, Typography, Divider, Box } from "@mui/material";
import UrlInputForm from "../components/UrllnputForm";
import ShortUrlList from "../components/ShortUrlList";

const ShortenerPage = () => {
  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Typography variant="h4" gutterBottom align="center">
        🔗 React URL Shortener
      </Typography>
      <UrlInputForm />
      <Divider sx={{ my: 4 }} />
      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" gutterBottom>
          Your Shortened URLs
        </Typography>
        <ShortUrlList />
      </Box>
    </Container>
  );
};

export default ShortenerPage;
