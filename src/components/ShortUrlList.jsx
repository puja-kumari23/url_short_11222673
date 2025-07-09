import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Link as MuiLink,
  Stack,
} from "@mui/material";
import useUrlStore from "../store/urlStore";

const ShortUrlList = () => {
  const { urls } = useUrlStore();

  if (urls.length === 0)
    return <Typography color="text.secondary">No URLs shortened yet.</Typography>;

  return (
    <Stack spacing={2}>
      {urls.map((url) => (
        <Card key={url.shortcode}>
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Original URL:
            </Typography>
            <MuiLink href={url.originalUrl} target="_blank" rel="noopener">
              {url.originalUrl}
            </MuiLink>

            <Typography sx={{ mt: 1 }} variant="body2" color="text.secondary">
              Short URL:
            </Typography>
            <MuiLink href={`/${url.shortcode}`} target="_blank" rel="noopener">
              http://localhost:3000/{url.shortcode}
            </MuiLink>

            <Typography sx={{ mt: 1 }}>
              Expires: {new Date(url.expiry).toLocaleString()}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Stack>
  );
};

export default ShortUrlList;
