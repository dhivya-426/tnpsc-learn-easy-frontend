import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

export const CardComponent = ({ title, description, url, buttonText }) => (
  <Card
    sx={{
      display: "flex",
      flexDirection: "column",
      minHeight: "100%",
      backgroundColor: "#d7ccc8",
    }}
  >
    <CardContent sx={{ flexGrow: 1 }}>
      <Typography
        variant="h6"
        component="h3"
        gutterBottom
        style={{ fontWeight: 600, position: "relative" }}
      >
        {title}
        {title === "Current Affairs" && (
          <span
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              color: "red",
              fontWeight: 300,
              fontSize: "15px",
            }}
          >
            <sup>*</sup>Coming Soon
          </span>
        )}
      </Typography>
    </CardContent>
    <CardContent sx={{ flexGrow: 1 }}>
      <Typography variant="body1" paragraph style={{ fontWeight: 400 }}>
        {description}
      </Typography>
    </CardContent>
    <CardActions>
      {title === "Current Affairs" ? (
        <Button
          variant="contained"
          size="medium"
          disabled={true}
          sx={{
            width: "200px",
            marginLeft: "0.7vw",
            marginBottom: "1vw",
            backgroundColor: "black",
            "&:hover": {
              backgroundColor: "gray",
              color: "black",
            },
          }}
        >
          {buttonText}
        </Button>
      ) : (
        <Link to={url} style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            size="medium"
            sx={{
              maxWidth: "200px",
              marginLeft: "0.7vw",
              marginBottom: "1vw",
              backgroundColor: "black",
              "&:hover": {
                backgroundColor: "gray",
                color: "black",
              },
            }}
          >
            {buttonText}
          </Button>
        </Link>
      )}
    </CardActions>
  </Card>
);
