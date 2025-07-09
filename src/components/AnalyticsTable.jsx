import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import useUrlStore from "../store/urlStore";

const AnalyticsTable = () => {
  const { urls } = useUrlStore();

  if (urls.length === 0)
    return <Typography>No analytics data available.</Typography>;

  return (
    <TableContainer component={Paper}>
      <Table aria-label="analytics table">
        <TableHead>
          <TableRow>
            <TableCell>Short URL</TableCell>
            <TableCell>Created At</TableCell>
            <TableCell>Expires At</TableCell>
            <TableCell>Click Count</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {urls.map((url) => (
            <React.Fragment key={url.shortcode}>
              <TableRow>
                <TableCell>
                  <a href={`/${url.shortcode}`} target="_blank" rel="noreferrer">
                    {url.shortcode}
                  </a>
                </TableCell>
                <TableCell>
                  {new Date(url.createdAt).toLocaleString()}
                </TableCell>
                <TableCell>{new Date(url.expiry).toLocaleString()}</TableCell>
                <TableCell>{url.clicks?.length || 0}</TableCell>
              </TableRow>
              {url.clicks?.length > 0 && (
                <TableRow>
                  <TableCell colSpan={4}>
                    <Accordion>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="subtitle1">
                          Click Details ({url.clicks.length})
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        {url.clicks.map((click, idx) => (
                          <div key={idx} style={{ marginBottom: "0.5rem" }}>
                            <Typography>
                              <strong>Time:</strong>{" "}
                              {new Date(click.time).toLocaleString()}
                            </Typography>
                            <Typography>
                              <strong>Source:</strong> {click.source || "Direct"}
                            </Typography>
                            <Typography>
                              <strong>Location:</strong> {click.location || "Unknown"}
                            </Typography>
                          </div>
                        ))}
                      </AccordionDetails>
                    </Accordion>
                  </TableCell>
                </TableRow>
              )}
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AnalyticsTable;
