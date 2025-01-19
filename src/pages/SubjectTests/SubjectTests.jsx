import React, { useEffect } from "react";
import { Box, Grid, Typography } from "@mui/material";
import SeperateSubject from "./SeperateSubject";

const cardDetails = [
  {
    id: 1,
    title: "Physics",
    topic: [
      "Nature of Universe",
      "Measurement of Physical Quantities",
      "General Scientific Laws in Motion",
      "Force Pressure and Energy",
      "Everyday application of the basic principles of Mechanics",
      "Electricity",
      "Magnetism",
      "Light",
      "Sound",
      "Heat",
      "Nuclear Physics in our daily life",
    ],
  },
  {
    id: 2,
    title: "Chemistry",
    topic: [
      "Elements and Compounds",
      "Acids Bases Salts",
      "Petroleum Products",
      "Fertilizers and Pesticides",
      "Metallurgy",
      "Food Adulterants",
    ],
  },
  {
    id: 3,
    title: "Biology",
    topic: [
      "Main concepts of Life Science",
      "Classification of living organisms",
      "Evolution",
      "Genetics",
      "Physiology",
      "Health Hygiene Nutririon",
      "Human diseases",
      "Environmental science",
    ],
  },
  {
    id: 4,
    title: "Geography of India",
    topic: [
      "Earth Location",
      "Physical Features",
      "Monsoon rainfall weather and climate",
      "Water resources Rivers",
      "Soil",
      "Minerals And Natural resources",
      "Forest and Wildlife",
      "Agriculture pattern",
      "Transport Communication",
      "Population",
      "Calamities Disaster Management",
      "Environment Climate change",
    ],
  },
  {
    id: 5,
    title: "History and Culture of India",
    topic: [
      "Indus Valley Civilization",
      "Guptas",
      "Delhi Sultans",
      "Mughals",
      "Marathas",
      "South Indian History",
      "Unity in Diversity Race Language Custom",
      "India as a Secular State",
    ],
  },
  {
    id: 6,
    title: "Indian Polity",
    topic: [
      "Constitution of India",
      "Preamble to the Constitution",
      "Salient features of the Constitution",
      "Union State and Union Territory",
      "Citizenship",
      "Fundamental Rights And Duties Directive Principles of State Policy",
      "Union Executive",
      "Union Legislature",
      "State Executive",
      "State Legislature",
      "Local Governments Panchayat Raj",
      "Spirit of Federalism Centre and State",
      "Election",
      "Judiciary in India",
      "Rule of Law",
      "Corruption in public life Anti Corruption measures Lokpal and Lokayukta",
      "Right to Information",
      "Empowerment of Women",
      "Consumer Protection Forums",
      "Human Rights Charter",
    ],
  },
  {
    id: 7,
    title: "Indian Economy",
    topic: [
      "Nature of Indian economy",
      "Five year plan models an assessment Planning Commission and Niti Aayog",
      "Sources of revenue",
      "Reserve Bank of India",
      "Finance Commission",
      "Resource sharing between Union and State Governments",
      "Goods and Services Tax",
      "Economic Trends Employment Generation",
      "Land Reforms Agriculture Application of Science and Technology in Agriculture",
      "Industrial growth",
      "Rural Welfare oriented programmes",
      "Social Problems Population Education Health Employment Poverty",
    ],
  },
  {
    id: 8,
    title: "Indian National Movement",
    topic: [
      "National Renaissance",
      "Early uprising against British Rule",
      "Indian National Congress",
      "Emergence of Leaders",
      "Different modes of Agitation of Tamil Nadu and movements",
    ],
  },
  // { id: 9, title: "History and Socio Political Movements in TamilNadu", topic: ['History of Tamil Society', 'Archaeological Discoveries of tamil society', 'Tamil Literature from Sangam age till contemporary times', 'Significance as a Secular Literature', 'Relevance to Everyday Life', 'Impact of Thirukkural on Humanity', 'Thirukkural and Universal Values Equality, Humanism etc', 'Relevance to Socio  Politico Economic affairs', 'Philosophical content in Thirukkural', 'Role of Tamil Nadu in freedom struggle', 'Early agitations against against British Rule', 'Role of women in freedom struggle', 'Various Social reformers', 'Social reform movements and Social transformation of Tamil Nadu'] },
  // {
  //     id: 10, title: "Developement Administration in Tamilnadu", topic: [
  //         'Social Justice and Social Harmonon and Health systems in Tamil Nadu', 'Geography of Tamil Nadu and its impact on Economic y as the Cornerstones of Socio Economic Development', 'Educatigrowth'
  //     ]
  // },
];

export const SubjectTests = () => {
  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <>
      <Box sx={{ marginTop: "20px" }}>
        <Box sx={{ paddingLeft: "10vw", paddingRight: "10vw" }}>
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            style={{
              fontWeight: 600,
              marginTop: "10px",
            }}
          >
            Free Topic-Wise Questions for TNPSC and TNUSRB Exams
          </Typography>

          <Typography variant="body1" paragraph style={{ fontWeight: 400 }}>
            Here, you will find topic-wise questions customized for TNPSC Group
            1, Group 2, Group 2A, Group 4, and TNUSRB aspirants. Follow these
            simple steps to utilize the page:
            <ul>
              <li>Select a topic from the available subjects.</li>
              <li>Click the "Get Questions" button.</li>
              <li>Receive a set of questions based on your chosen topic.</li>
            </ul>
            This feature allows you to focus on specific areas and enhance your
            preparation effectively.
          </Typography>
        </Box>
        <Grid
          container
          spacing={3}
          sx={{ padding: "0 10vw", marginBottom: "10vh" }}
        >
          {cardDetails.map((card) => (
            <SeperateSubject card={card} key={card.id} />
          ))}
        </Grid>
      </Box>
    </>
  );
};
