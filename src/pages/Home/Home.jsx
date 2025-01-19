import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { CardComponent } from "../../components";
import BenefitsSection from "./BenefitsSection";
import SyllabusCoverageSection from "./SyllabusCoverageSection";
import bannerImg from "../../assets/images/banner.jpeg";

export const Home = () => {
  const cards = [
    {
      title: "Topic wise MCQ",
      description:
        "Free topic-wise online tests based on the syllabus, for TNPSC Group 1, Group 2, 2A, and Group 4 aspirants.",
      url: "/tnpsc-subject-wise-online-test",
      buttonText: "Topic wise Test",
    },
    {
      title: "Tnpsc mock",
      description:
        "Free online mock tests based on the syllabus, for TNPSC Group 1, Group 2, 2A, and Group 4 aspirants.",
      url: "/tnpsc-free-mock-tests",
      buttonText: "Mock Test",
    },
    {
      title: "Current Affairs",
      description:
        "Free current affairs tests based on the syllabus, for TNPSC Group 1, Group 2, 2A, and Group 4 aspirants",
      url: "/tnpsc-current-affairs",
      buttonText: "Current affairs",
    },
  ];

  return (
    <Box sx={{ flexGrow: 1, paddingTop: 4, paddingBottom: 4, paddingLeft: 2 }}>
      <Container maxWidth="lg">
        <Grid container spacing={2} style={{ backgroundColor: "#F5F5F5" }}>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              component="h1"
              gutterBottom
              style={{ fontWeight: 600 }}
            >
              Welcome to TNPSC Learn Easy: Your Guide to TNPSC Exam Success
            </Typography>
            <Typography variant="body1" paragraph style={{ fontWeight: 400 }}>
              Get ready to do great in your TNPSC exams with TNPSC Learn Easy!
              We offer lots of free online tests to help you prepare for TNPSC
              group 1, group 2, and group 4 exams.
            </Typography>
            <Typography variant="body1" paragraph style={{ fontWeight: 400 }}>
              Take our full test series to see how well you're doing overall or
              focus on specific subjects like general studies with our
              topic-wise online tests. Need to see how well you know everything?
              Our full syllabus tests have got you covered.
            </Typography>
            <Typography variant="body1" paragraph style={{ fontWeight: 400 }}>
              Our easy-to-use platform tells you right away how you're doing on
              each question, helping you learn and improve. Join us now and
              increase your chances of doing well in the TNPSC exams!
            </Typography>
            <Typography variant="body1" paragraph style={{ fontWeight: 400 }}>
              All Questions are taken from the SCERT books based on the tnpsc
              syllabus.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} sx={{ paddingRight: "3vw" }}>
            <img
              src={bannerImg}
              alt="Banner"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                maxHeight: "400px",
                maxWidth: "500px",
              }}
            />
          </Grid>
        </Grid>

        {/* Quiz Categories */}
        <Grid
          container
          spacing={2}
          style={{ marginTop: "10px", marginBottom: "10px" }}
        >
          <Grid item xs={12} sx={{ paddingBottom: "10px" }}>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={{ textAlign: "center" }}
              style={{ fontWeight: 500 }}
            >
              TNPSC MCQ
            </Typography>
          </Grid>

          <Grid container spacing={2} style={{ paddingLeft: 2 }}>
            {cards.map((card, index) => (
              <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
                <CardComponent
                  title={card.title}
                  description={card.description}
                  url={card.url}
                  buttonText={card.buttonText}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Benefits and Syllabus Coverage Sections */}
        <BenefitsSection />
        <SyllabusCoverageSection />
      </Container>
    </Box>
  );
};
