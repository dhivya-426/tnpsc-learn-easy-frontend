import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  CircularProgress,
  Pagination,
  PaginationItem,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import SingleQuestion from "./SingleQuestion";
import Error from "./Error";
import questionService from "../../services/question.service.js";

export const Questions = () => {
  const { title, topic } = useParams();

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(9);
  const [data, setData] = useState([]);
  const [err, setErr] = useState(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [markColour, setMarkColour] = useState("");
  const [heading, setHeading] = useState("");
  const [mainContent, setMainContent] = useState({});

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data?.slice(indexOfFirstItem, indexOfLastItem);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      e.preventDefault();
      e.returnValue = "Are you sure you want to leave this page?";
      return e.returnValue;
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        let questionData;
        if (title && topic) {
          setHeading(
            `${topic.replace(/-/g, " ").toLocaleUpperCase()} MCQ Questions`
          );
          questionData = await questionService.getQuestionsByTopic(
            title,
            topic
          );
        } else {
          setHeading(
            "Free Mock Tests for TNPSC Group 1, Group 2, Group 2A, Group 4, and TNUSRB SI Exam"
          );
          setMainContent({
            content1:
              "Our free online full mock test platform offers comprehensive preparation for TNPSC and TNUSRB exams.",
            content2: "If you want new questions, just refresh the page.",
            content3:
              "If you find any problems during the test, you can report them for quick resolution.",
          });
          questionData = await questionService.getRandomQuestions();
        }
        if (questionData.length === 0) {
          setErr(
            "No questions available at the moment. Please try again later."
          );
        } else {
          setData(questionData);
        }
      } catch (error) {
        setErr("Something went wrong");
      }
    }

    fetchData();
    localStorage.clear();
  }, [title, topic]);

  return (
    <Box>
      <Paper
        sx={{
          position: "sticky",
          top: 0,
          float: "right",
          backgroundColor: markColour,
          width: isSmallScreen ? "10vh" : "18vh",
          height: isSmallScreen ? "8vh" : "12vh",
          zIndex: 1,
          display: totalCount > 0 ? "flex" : "none",
          alignItems: "center",
          justifyContent: "center",
        }}
        elevation={3}
      >
        <Typography sx={{ fontSize: isSmallScreen ? "2vh" : "3vh" }}>
          {correctCount}/{totalCount}
        </Typography>
      </Paper>

      {err ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "60vh",
            minWidth: "80vw",
          }}
        >
          <Error data={err} />
        </Box>
      ) : !data?.length ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "80vh",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <Box sx={{ paddingBottom: "50px", paddingX: "3vw" }}>
          {currentPage === 1 && (
            <Box
              sx={{
                paddingLeft: "1vw",
                paddingRight: "3vw",
                marginBottom: "10px",
              }}
            >
              <Typography
                variant="h4"
                component="h1"
                sx={{
                  fontWeight: 500,
                  marginTop: "10px",
                }}
              >
                {heading}
              </Typography>
              <Typography variant="body1" paragraph sx={{ fontWeight: 400 }}>
                {mainContent.content1}
              </Typography>
              <Typography variant="body1" paragraph sx={{ fontWeight: 400 }}>
                {mainContent.content2}
              </Typography>
              <Typography variant="body1" paragraph sx={{ fontWeight: 400 }}>
                {mainContent.content3}
              </Typography>
              <Typography
                variant="h5"
                component="h2"
                sx={{
                  fontWeight: 600,
                  textAlign: "center",
                }}
              >
                Questions
              </Typography>
            </Box>
          )}

          {currentItems.map((questionObj, index) => (
            <SingleQuestion
              key={index + 9 * (currentPage - 1)}
              questionObj={questionObj}
              value={index + 9 * (currentPage - 1)}
              setCorrects={setCorrectCount}
              setTotal={setTotalCount}
              correct={correctCount}
              total={totalCount}
              setMarkColour={setMarkColour}
            />
          ))}

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              backgroundColor: "white",
            }}
          >
            <Pagination
              count={Math.ceil(data.length / itemsPerPage)}
              page={currentPage}
              onChange={handlePageChange}
              siblingCount={1}
              boundaryCount={1}
              defaultPage={1}
              size="large"
              shape="rounded"
              sx={{ display: "flex", justifyContent: "center" }}
              renderItem={(item) => (
                <PaginationItem
                  {...item}
                  sx={{
                    "@media (max-width: 600px)": {
                      minWidth: "30px",
                      height: "30px",
                      fontSize: "4vw",
                    },
                  }}
                />
              )}
            />
          </Box>
        </Box>
      )}
    </Box>
  );
};
