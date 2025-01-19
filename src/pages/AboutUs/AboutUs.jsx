import React, { useEffect } from "react";
import { Container, Grid, Typography } from "@mui/material";

export const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container maxWidth="lg">
      <Grid container spacing={3} justifyContent="center" alignItems="center">
        <Grid item xs={12} sx={{ marginTop: "10px" }}>
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            style={{ fontWeight: 500 }}
          >
            About Us
          </Typography>
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography
            variant="body1"
            paragraph
            align="justify"
            style={{ fontWeight: 400 }}
          >
            Welcome to TNPSC Learn Easy, your ultimate destination for TNPSC
            exam preparation. Founded with a vision to empower aspirants and
            streamline their journey towards success, our platform stands as a
            beacon of excellence in the realm of competitive exams.
          </Typography>
          <Typography
            variant="body1"
            paragraph
            align="justify"
            style={{ fontWeight: 400 }}
          >
            Our mission at TNPSC Learn Easy is clear: to provide TNPSC aspirants
            with a comprehensive and reliable platform for exam preparation. We
            strive to offer high-quality MCQ questions, innovative learning
            tools to help aspirants achieve their academic and career goals.
          </Typography>
          <Typography
            variant="body1"
            paragraph
            align="justify"
            style={{ fontWeight: 400 }}
          >
            Driven by a commitment to excellence, we envision a future where
            every TNPSC aspirant has access to top-notch study resources and
            guidance, regardless of their background or location. We aim to
            foster a culture of continuous learning and growth, where success is
            not just a destination but a journey of self-discovery and
            empowerment.
          </Typography>
          <Typography
            variant="body1"
            paragraph
            align="justify"
            style={{ fontWeight: 400 }}
          >
            At TNPSC Learn Easy, we offer an extensive question bank with over
            14,000 meticulously crafted multiple-choice questions covering a
            wide range of topics from the TNPSC syllabus. Our platform also
            features innovative learning features, expert guidance, and a
            supportive community to help aspirants stay ahead in their exam
            preparation journey.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};
