import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import {
  AboutUs,
  ContactUs,
  Home,
  PrivacyPolicy,
  Questions,
  SubjectTests,
  TermsOfService,
} from "../pages";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tnpsc-questions/:title/:topic" element={<Questions />} />
      <Route path="/tnpsc-free-mock-tests" element={<Questions />} />
      <Route
        path="/tnpsc-subject-wise-online-test"
        element={<SubjectTests />}
      />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-of-service" element={<TermsOfService />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;
