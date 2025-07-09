import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { isValidShortcode, isValidUrl } from "../utils/validators";
import { logEvent } from "../utils/loggerMiddleware";
import useUrlStore from "../store/urlStore";

const UrlInputForm = () => {
  const { addUrl } = useUrlStore();
  const [forms, setForms] = useState([
    { url: "", validity: "", shortcode: "", error: "" },
  ]);

  const handleChange = (index, field, value) => {
    const updatedForms = [...forms];
    updatedForms[index][field] = value;
    setForms(updatedForms);
  };

  const handleAddMore = () => {
    if (forms.length < 5) {
      setForms([...forms, { url: "", validity: "", shortcode: "", error: "" }]);
    }
  };

  const handleSubmit = (index) => {
    const { url, validity, shortcode } = forms[index];
    const updatedForms = [...forms];

    // Validate URL
    if (!isValidUrl(url)) {
      updatedForms[index].error = "Invalid URL format";
      setForms(updatedForms);
      return;
    }

    // Validate shortcode if given
    if (shortcode && !isValidShortcode(shortcode)) {
      updatedForms[index].error = "Shortcode must be alphanumeric (4-12 chars)";
      setForms(updatedForms);
      return;
    }

    // Validate validity
    const validMinutes = validity ? parseInt(validity) : 30;
    if (validity && isNaN(validMinutes)) {
      updatedForms[index].error = "Validity must be an integer";
      setForms(updatedForms);
      return;
    }

    // Generate a unique shortcode if not provided
    const generatedCode =
      shortcode ||
      Math.random().toString(36).substring(2, 8) + Date.now().toString(36).slice(-2);

    // Create shortened URL object
    const shortUrl = {
      originalUrl: url,
      shortcode: generatedCode,
      createdAt: new Date().toISOString(),
      expiry: new Date(Date.now() + validMinutes * 60000).toISOString(),
      clicks: [],
    };

    addUrl(shortUrl);
    logEvent("URL_SHORTENED", shortUrl);

    // Clear the form
    updatedForms[index] = { url: "", validity: "", shortcode: "", error: "" };
    setForms(updatedForms);
  };

  return (
    <Paper elevation={3} sx={{ p: 3, maxWidth: 900, mx: "auto" }}>
      <Typography variant="h5" gutterBottom>
        Shorten up to 5 URLs
      </Typography>

      {forms.map((form, index) => (
        <Box key={index} sx={{ mb: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Original URL"
                value={form.url}
                onChange={(e) => handleChange(index, "url", e.target.value)}
              />
            </Grid>
            <Grid item xs={6} md={2}>
              <TextField
                fullWidth
                label="Validity (min)"
                value={form.validity}
                onChange={(e) => handleChange(index, "validity", e.target.value)}
              />
            </Grid>
            <Grid item xs={6} md={2}>
              <TextField
                fullWidth
                label="Shortcode (optional)"
                value={form.shortcode}
                onChange={(e) => handleChange(index, "shortcode", e.target.value)}
              />
            </Grid>
            <Grid item xs={12} md={2}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={() => handleSubmit(index)}
              >
                Shorten
              </Button>
            </Grid>
            {form.error && (
              <Grid item xs={12}>
                <Typography color="error">{form.error}</Typography>
              </Grid>
            )}
          </Grid>
        </Box>
      ))}

      {forms.length < 5 && (
        <Button onClick={handleAddMore} variant="outlined" fullWidth>
          Add Another URL
        </Button>
      )}
    </Paper>
  );
};

export default UrlInputForm;
