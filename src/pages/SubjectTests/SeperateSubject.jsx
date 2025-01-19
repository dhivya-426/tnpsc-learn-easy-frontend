import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  styled,
} from "@mui/material";

const SelectCustom = styled(Select)({
  "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "black",
  },
});

const CustomLabel = styled(InputLabel)({
  "&.MuiFormLabel-root.Mui-focused": {
    color: "black",
  },
});

const SeperateSubject = ({ card }) => {
  const [url, setUrl] = useState("");
  const [selectedTopic, setSelectedTopic] = useState(null);

  const handleChange = async (event) => {
    setSelectedTopic(event.target.value);
    if (event.target.value !== null) {
      setUrl(event.target.value.toLowerCase().replace(/\s+/g, "-"));
    }
  };

  return (
    <Grid item xs={12} sm={6} md={4} lg={4}>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100%",
          backgroundColor: "#d7ccc8",
        }}
      >
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography variant="h6" component="div">
            {card.title}
          </Typography>
        </CardContent>
        <CardContent>
          <FormControl sx={{ width: "150px" }}>
            <CustomLabel id="demo-simple-select-label" sx={{ zIndex: 0 }}>
              Select Topic
            </CustomLabel>
            <SelectCustom
              value={selectedTopic}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Select Topic"
              onChange={handleChange}
              sx={{
                borderColor: "black",
                zIndex: 0,
                maxWidth: "300px",
              }}
            >
              <MenuItem value={null} disabled>
                Select
              </MenuItem>
              {card.topic.map((item, index) => (
                <MenuItem
                  sx={{
                    maxWidth: "300px",
                    wordWrap: "break-word",
                    whiteSpace: "normal",
                  }}
                  key={index}
                  value={item}
                >
                  {item}
                </MenuItem>
              ))}
            </SelectCustom>
          </FormControl>
        </CardContent>
        <CardActions>
          {selectedTopic !== null && (
            <Link
              to={`/tnpsc-questions/${card.title
                .toLowerCase()
                .replace(/\s+/g, "-")}/${url}`}
              style={{ textDecoration: "none" }}
            >
              <Button
                variant="contained"
                size="medium"
                disabled={selectedTopic === null}
                sx={{
                  width: "155px",
                  marginLeft: "0.7vw",
                  marginBottom: "1vw",
                  backgroundColor: "black",
                  "&:hover": {
                    backgroundColor: "gray",
                    color: "black",
                  },
                }}
              >
                Get Questions
              </Button>
            </Link>
          )}
        </CardActions>
      </Card>
    </Grid>
  );
};

export default SeperateSubject;
