import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Paper,
  Radio,
  Select,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import reportService from "../../services/report.service";
import "./SingleQuestion.css";

const SingleQuestion = ({
  questionObj,
  value,
  correct,
  total,
  setCorrects,
  setTotal,
  setMarkColour,
}) => {
  const [selectedValue, setSelectedValue] = useState("");
  const [color, setColor] = useState("");
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [reportStatus, setReportStatus] = useState(false);
  const [emailValidation, setEmailValidation] = useState("Enter a valid email");
  const [selectedReason, setSelectedReason] = useState("");
  const [email, setEmail] = useState("");
  const [reasonValidation, setReasonValidation] = useState("Select One Reason");
  const [activateOthers, setActivateOthers] = useState(false);
  const [otherReason, setOtherReason] = useState("");
  const [result, setResult] = useState("");
  const [optionSelected, setOptionSelected] = useState(false);

  const emailRegex = /^[\w.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  useEffect(() => {
    const storedResponse = localStorage.getItem(
      `response_${questionObj.question}`
    );
    if (storedResponse) {
      setSelectedValue(storedResponse);
      setColor(storedResponse === questionObj.answer ? "#cfffc3" : "#ffcbcd");
      setSelectedAnswer(storedResponse !== questionObj.answer);
    }
  }, [questionObj]);

  const StyledRadio = styled(Radio)({
    color: "black",
    "&.Mui-checked": {
      color: "black",
    },
  });

  const getMarkColor = (percentage) => {
    if (percentage > 90) return "#00FF00";
    if (percentage > 80) return "#66FF00";
    if (percentage > 70) return "#CCFF00";
    if (percentage > 60) return "#FFFF00";
    if (percentage > 50) return "#FFCC00";
    if (percentage > 40) return "#FF9900";
    if (percentage > 30) return " #FF6600";
    if (percentage > 20) return "#FF3300";
    return "#FF0000";
  };

  const handleChange = (event) => {
    const selected = event.target.value;
    setSelectedValue(selected);
    localStorage.setItem(`response_${questionObj.question}`, selected);
    setOptionSelected(true);

    let tempTotal = total + 1;
    setTotal(tempTotal);

    const tempCorrect = selected === questionObj.answer ? correct + 1 : correct;
    setCorrects(tempCorrect);

    setColor(selected === questionObj.answer ? "#cfffc3" : "#ffcbcd");

    const percentage = (tempCorrect * 100) / tempTotal;
    setMarkColour(getMarkColor(percentage));
  };

  const reportOpen = () => {
    setReportStatus((prev) => !prev);
    resetReportForm();
  };

  const resetReportForm = () => {
    setSelectedReason("");
    setEmail("");
    setOtherReason("");
    setActivateOthers(false);
    setReasonValidation("Select One Reason");
    setEmailValidation("Enter a valid email");
    setResult("");
  };

  const emailValidationFunction = (e) => {
    const value = e.target.value;
    setEmail(value);
    setEmailValidation(emailRegex.test(value) ? "" : "Enter a valid email");
  };

  const handleSelectChange = (e) => {
    const value = e.target.value;
    setSelectedReason(value);
    setReasonValidation(value ? "" : "Select One Reason");
    setActivateOthers(value === "Others");
  };

  const onOtherReasonChange = (e) => {
    setOtherReason(e.target.value);
  };

  const postData = async (e) => {
    e.preventDefault();

    const payload = {
      email,
      reason: selectedReason,
      description: otherReason,
      resolvedStatus: "not resolved",
      question: questionObj.question,
    };

    try {
      const { data } = await reportService.submitReport(payload);
      setResult(
        data ? "Report Submitted Successfully" : "Something went wrong"
      );
      resetReportForm();
    } catch {
      setResult("Something went wrong");
    }
  };

  return (
    <Paper
      elevation={3}
      sx={{ margin: "5px 5px", padding: "0px 10px", backgroundColor: color }}
    >
      <Typography variant="h6" component="div">
        <span>{value + 1}. </span>
        {questionObj.question}
      </Typography>

      {[
        questionObj.option1,
        questionObj.option2,
        questionObj.option3,
        questionObj.option4,
      ].map(
        (option, index) =>
          option && (
            <FormControlLabel
              key={index}
              value={option}
              control={<StyledRadio disabled={optionSelected} />}
              label={option}
              onChange={handleChange}
              checked={selectedValue === option}
              sx={{ display: "block" }}
            />
          )
      )}

      <Grid container alignItems="center">
        <Grid item xs={6}>
          <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
            {selectedAnswer && <span>Ans: {questionObj.answer}</span>}
          </Typography>
        </Grid>
        <Grid item xs={6} style={{ textAlign: "right" }}>
          <Button
            variant="contained"
            size="medium"
            sx={{
              width: "120px",
              marginLeft: "0.7vw",
              marginBottom: "1vw",
              backgroundColor: "black",
              "&:hover": {
                backgroundColor: "gray",
                color: "black",
              },
            }}
            onClick={reportOpen}
          >
            Report
          </Button>
        </Grid>
      </Grid>

      <Dialog open={reportStatus}>
        <Box
          sx={{
            justifyContent: "space-between",
            display: "flex",
            alignItems: "center",
          }}
        >
          <DialogTitle sx={{ display: "inline-flex", flexGrow: 1 }}>
            Report Form
          </DialogTitle>
          <IconButton onClick={reportOpen}>
            <Close />
          </IconButton>
        </Box>

        <DialogContent>
          <TextField
            className="formText"
            autoFocus
            margin="dense"
            label="Email"
            type="email"
            fullWidth
            required
            name="email"
            value={email}
            onChange={emailValidationFunction}
          />
          <Typography component="p" variant="h9" sx={{ color: "red" }}>
            {emailValidation}
          </Typography>

          <FormControl fullWidth>
            <InputLabel id="reason-select-label" sx={{ zIndex: 0 }}>
              Reason
            </InputLabel>
            <Select
              value={selectedReason}
              labelId="reason-select-label"
              id="reason-select"
              label="Reason"
              onChange={handleSelectChange}
              sx={{ borderColor: "black", zIndex: 0 }}
            >
              <MenuItem value={null} disabled>
                Select
              </MenuItem>
              <MenuItem value="Wrong Question">Wrong Question</MenuItem>
              <MenuItem value="Wrong Answer">Wrong Answer</MenuItem>
              <MenuItem value="Others">Others</MenuItem>
            </Select>
          </FormControl>

          <Typography component="p" variant="h9" sx={{ color: "red" }}>
            {reasonValidation}
          </Typography>

          {activateOthers && (
            <Box>
              <TextField
                className="formText"
                label="Description"
                multiline
                fullWidth
                rows={5}
                name="description"
                value={otherReason}
                onChange={onOtherReasonChange}
              />
              <Typography component="p" variant="h9">
                {otherReason.length}/1000
              </Typography>
            </Box>
          )}
        </DialogContent>

        <DialogActions>
          <Button onClick={reportOpen} color="error">
            Cancel
          </Button>
          <Button
            color="success"
            disabled={emailValidation || reasonValidation}
            onClick={postData}
          >
            Send
          </Button>
        </DialogActions>

        <Box sx={{ paddingBottom: "15px" }}>
          <Typography
            component="p"
            variant="h9"
            sx={{ color: "green", paddingLeft: "5px" }}
          >
            {result}
          </Typography>
        </Box>
      </Dialog>
    </Paper>
  );
};

export default SingleQuestion;
