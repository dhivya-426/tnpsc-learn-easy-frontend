import React, { useEffect } from "react";
import { Container, Typography } from "@mui/material";

export const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container maxWidth="md">
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        style={{ fontWeight: 500 }}
      >
        Privacy Policy
      </Typography>
      <Typography variant="body1" paragraph style={{ fontWeight: 400 }}>
        Welcome to TNPSC Learn Easy! We are committed to protecting your privacy
        and ensuring the security of your personal information. This Privacy
        Policy outlines how we collect, use, and protect the information you
        provide to us.
      </Typography>

      <Typography variant="h5" gutterBottom style={{ fontWeight: 500 }}>
        Information We Collect
      </Typography>
      <Typography variant="body1" paragraph style={{ fontWeight: 400 }}>
        We collect email addresses through forms on our website. This
        information is provided voluntarily by users who wish to contact us or
        submit inquiries.
      </Typography>

      <Typography variant="h5" gutterBottom style={{ fontWeight: 500 }}>
        Use of Collected Information
      </Typography>
      <Typography variant="body1" paragraph style={{ fontWeight: 400 }}>
        The email addresses collected are used solely for the purpose of
        replying to user inquiries, addressing issues raised by users, and
        communicating with users as necessary.
      </Typography>

      <Typography variant="h5" gutterBottom style={{ fontWeight: 500 }}>
        Third-Party Services
      </Typography>
      <Typography variant="body1" paragraph style={{ fontWeight: 400 }}>
        We do not share users' email addresses with any third parties, except
        for the inclusion of Google AdSense for website monetization purposes.
      </Typography>

      <Typography variant="h5" gutterBottom style={{ fontWeight: 500 }}>
        Data Security
      </Typography>
      <Typography variant="body1" paragraph style={{ fontWeight: 400 }}>
        User email addresses are stored securely in our database to prevent
        unauthorized access, misuse, or loss.
      </Typography>

      <Typography variant="h5" gutterBottom style={{ fontWeight: 500 }}>
        User Rights
      </Typography>
      <Typography variant="body1" paragraph style={{ fontWeight: 400 }}>
        Users have the right to contact us regarding their personal information
        by using the provided email address or submitting inquiries through our
        contact us page. They can request access to their information,
        correction of any inaccuracies, or deletion of their data.
      </Typography>

      <Typography variant="h5" gutterBottom style={{ fontWeight: 500 }}>
        Policy Changes
      </Typography>
      <Typography variant="body1" paragraph style={{ fontWeight: 400 }}>
        Any changes to this Privacy Policy will be updated on our privacy policy
        page. Users are encouraged to check this page periodically for updates.
      </Typography>

      <Typography variant="h5" gutterBottom style={{ fontWeight: 500 }}>
        Contact Us
      </Typography>
      <Typography variant="body1" paragraph style={{ fontWeight: 400 }}>
        If you have any questions or concerns about our Privacy Policy or the
        handling of your personal information, please contact us at
        contactus@tnpsclearneasy.in.
      </Typography>
    </Container>
  );
};
