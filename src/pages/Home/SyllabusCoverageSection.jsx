import React from "react";
import { Grid, Typography } from "@mui/material";

export const SyllabusCoverageSection = () => (
  <Grid
    container
    spacing={2}
    style={{
      marginTop: "10px",
      marginBottom: "10px",
      backgroundColor: "#E6E6FA",
      borderRadius: "5px",
    }}
  >
    <Grid item xs={12} sm={6} md={4} lg={4} sx={{ paddingRight: "25px" }}>
      <Typography
        variant="h5"
        gutterBottom
        style={{ fontWeight: 500 }}
        align="center"
      >
        Syllabus Coverage
      </Typography>
      <Typography
        variant="body1"
        paragraph
        style={{ fontWeight: 400 }}
        align="center"
      >
        All the Questions are taken on the basis of the syllabus provided by
        Tnpsc. The sources of the questions are from School books.
      </Typography>
    </Grid>

    <Grid item xs={12} sm={6} md={4} lg={4} sx={{ paddingRight: "25px" }}>
      <Typography
        variant="h5"
        gutterBottom
        style={{ fontWeight: 500 }}
        align="center"
      >
        Future Updates
      </Typography>

      <Typography variant="body1" paragraph style={{ fontWeight: 400 }}>
        1. The Questions for History Socio Political Movements in TamilNadu and
        Developement Administration in Tamilnadu is will be available soon.
      </Typography>
      <Typography variant="body1" paragraph style={{ fontWeight: 400 }}>
        2. Option to select two or more topic and get questions based on that.
      </Typography>
    </Grid>

    <Grid item xs={12} sm={6} md={4} lg={4} sx={{ paddingRight: "25px" }}>
      <Typography
        variant="h5"
        gutterBottom
        style={{ fontWeight: 500 }}
        align="center"
      >
        Study Resources
      </Typography>
      <Typography
        variant="body1"
        paragraph
        style={{ fontWeight: 400 }}
        align="center"
      >
        Use SCERT book for study and attend the online test here, The questions
        are taken from the SCERT books only.
      </Typography>
    </Grid>
  </Grid>
);

export default SyllabusCoverageSection;
