import React, { useEffect } from "react";
import { Container, Grid, Typography } from "@mui/material";

export const TermsOfService = () => {
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
            Terms of Service
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
            Users are free to access quiz questions by participating in quizzes
            provided by the Service. Users are prohibited from using the content
            of the webpage for their own purposes, including but not limited to
            copying, distributing, or reproducing quiz questions without proper
            authorization.
          </Typography>
          <Typography
            variant="body1"
            paragraph
            align="justify"
            style={{ fontWeight: 400 }}
          >
            All content, including quiz questions, provided on the Service is
            the intellectual property of TNPSC Learn Easy. Users may not use,
            reproduce, or distribute any content from the Service without prior
            written consent.
          </Typography>
          <Typography
            variant="body1"
            paragraph
            align="justify"
            style={{ fontWeight: 400 }}
          >
            Users agree not to engage in any activity that may disrupt or
            interfere with the proper functioning of the Service. Prohibited
            activities include but are not limited to hacking, spamming, or
            attempting to gain unauthorized access to the Service.
          </Typography>
          <Typography
            variant="body1"
            paragraph
            align="justify"
            style={{ fontWeight: 400 }}
          >
            Please refer to our Privacy Policy for information on how we
            collect, use, and protect your personal information.
          </Typography>
          <Typography
            variant="body1"
            paragraph
            align="justify"
            style={{ fontWeight: 400 }}
          >
            The Service is provided on an "as is" and "as available" basis,
            without any warranties of any kind, express or implied. TNPSC Learn
            Easy does not warrant that the Service will be error-free or
            uninterrupted.
          </Typography>
          <Typography
            variant="body1"
            paragraph
            align="justify"
            style={{ fontWeight: 400 }}
          >
            In no event shall TNPSC Learn Easy be liable for any indirect,
            incidental, special, consequential, or punitive damages, arising out
            of or in connection with your use of the Service.
          </Typography>
          <Typography
            variant="body1"
            paragraph
            align="justify"
            style={{ fontWeight: 400 }}
          >
            TNPSC Learn Easy reserves the right to update or modify these Terms
            at any time without prior notice. Changes will be effective
            immediately upon posting on the Service. Users are encouraged to
            review these Terms periodically for any updates or changes.
          </Typography>
          <Typography
            variant="body1"
            paragraph
            align="justify"
            style={{ fontWeight: 400 }}
          >
            If you have any questions or concerns about these Terms or the
            Service, please contact us at{" "}
            <span style={{ fontWeight: "bold" }}>
              Mail Id : contactus@tnpsclearneasy.in{" "}
            </span>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};
