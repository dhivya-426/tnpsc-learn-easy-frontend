import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import contactService from "../../services/contact.service";

export const ContactUs = () => {
  const [submissionMsg, setSubmissionMsg] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [emailError, setEmailError] = useState("Enter a valid email");
  const [nameError, setNameError] = useState("Enter at least 3 characters");
  const [descriptionError, setDescriptionError] = useState(
    "Enter at least 20 characters"
  );

  const emailRegex = /^[\w.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleEmailChange = (e) => {
    const value = e.target.value;
    if (emailRegex.test(value)) {
      setEmailError("");
    } else {
      setEmailError("Enter a valid email");
    }
    setEmail(value);
  };

  const handleNameChange = (e) => {
    const value = e.target.value;
    if (value.length > 2) {
      setNameError("");
    } else {
      setNameError("Enter at least 3 characters");
    }
    setName(value);
  };

  const handleDescriptionChange = (e) => {
    const value = e.target.value;
    if (value.length <= 1000) {
      if (value.length > 19) {
        setDescriptionError("");
      } else {
        setDescriptionError("Enter at least 20 characters");
      }
    } else {
      setDescriptionError("Limit Reached");
    }
    setDescription(value);
  };

  const clearForm = () => {
    setEmail("");
    setName("");
    setDescription("");
    setEmailError("Enter a valid email");
    setNameError("Enter at least 3 characters");
    setDescriptionError("Enter at least 20 characters");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { email, name, description };
    try {
      const response = await contactService.sendContactForm(payload);
      setSubmissionMsg("Form submitted successfully!");
      if (response) clearForm();
    } catch (error) {
      setSubmissionMsg("Failed to submit the form.");
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container maxWidth="sm" className="container">
      <Grid
        container
        xs={12}
        spacing={3}
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} sx={{ marginTop: "10px" }}>
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            style={{ fontWeight: 500 }}
          >
            Reach Us
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ marginLeft: "25px" }}>
          <Typography
            variant="body1"
            align="center"
            gutterBottom
            style={{ fontWeight: 400 }}
          >
            Have a question, suggestion, or just want to get in touch? We'd love
            to hear from you! Connect with us with{" "}
            <span style={{ fontWeight: "bold" }}>
              Mail Id : contactus@tnpsclearneasy.in{" "}
            </span>
            or Use the form below to send us a message, and we'll get back to
            you as soon as possible.
          </Typography>
          <Paper elevation={3} sx={{ width: "100", padding: "20px" }}>
            <Box sx={{ paddingBottom: "12px" }}>
              <TextField
                className="formText"
                autoFocus
                margin="dense"
                label="Name"
                type="text"
                fullWidth
                required
                name="name"
                value={name}
                onChange={handleNameChange}
              />
              <Typography component="p" variant="h9" sx={{ color: "red" }}>
                {nameError}
              </Typography>
            </Box>
            <Box sx={{ paddingBottom: "12px" }}>
              <TextField
                className="formText"
                margin="dense"
                label="Email"
                type="email"
                fullWidth
                required
                name="email"
                value={email}
                onChange={handleEmailChange}
              />
              <Typography component="p" variant="h9" sx={{ color: "red" }}>
                {emailError}
              </Typography>
            </Box>
            <Box>
              <TextField
                className="formText"
                label="Description"
                multiline
                fullWidth
                rows={5}
                name="description"
                value={description}
                onChange={handleDescriptionChange}
              />
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography
                  component="p"
                  variant="h9"
                  sx={{ color: "red", display: "inline" }}
                >
                  {descriptionError}
                </Typography>
                <Typography
                  component="p"
                  variant="h9"
                  sx={{ display: "inline" }}
                >
                  {description.length}/1000
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{ display: "flex", alignItems: "center", marginTop: "20px" }}
            >
              <Box sx={{ flexGrow: 1 }}>
                <Typography
                  component="p"
                  variant="h9"
                  sx={{ color: "green", paddingLeft: "5px" }}
                >
                  {submissionMsg}
                </Typography>
              </Box>
              <Button
                variant="contained"
                onClick={clearForm}
                color="primary"
                sx={{
                  marginRight: "10px",
                  backgroundColor: "gray",
                  "&:hover": {
                    backgroundColor: "darkgray",
                    color: "black",
                  },
                }}
              >
                Clear
              </Button>
              <Button
                variant="contained"
                onClick={handleSubmit}
                sx={{
                  marginRight: "10px",
                  backgroundColor: "green",
                  "&:hover": {
                    backgroundColor: "#50C878",
                    color: "white",
                  },
                }}
                disabled={
                  emailError === "" &&
                  nameError === "" &&
                  descriptionError === ""
                    ? ""
                    : true
                }
              >
                Send
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};
