import React from "react";
import { Grid, Typography } from "@mui/material";

export const BenefitsSection = () => (
  <Grid
    container
    spacing={2}
    style={{
      marginTop: "10px",
      marginBottom: "10px",
      backgroundColor: "#F5F5DC",
      borderRadius: "5px",
    }}
  >
    <Grid item xs={12} sx={{ paddingRight: "14px" }}>
      <Typography
        variant="h5"
        gutterBottom
        style={{ fontWeight: 500 }}
        align="center"
      >
        Benefits of Using Our Website
      </Typography>
      <Typography
        variant="body1"
        paragraph
        style={{ fontWeight: 400 }}
        align="center"
      >
        Our Site contains more than 14000+ question for practise. All Questions
        are taken from the SCERT books.
        <br />
        For TNPSC Group 1, 2, 2A, and 4 aspirants, it will help to gain strength
        in the General Studies topic to clear the exam and secure your dream
        job. It will test your knowledge of the SCERT books.
      </Typography>
    </Grid>
  </Grid>
);

export default BenefitsSection;
