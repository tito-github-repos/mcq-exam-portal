"use client";

import React, { useState } from "react";
import "./sample-test.css";

import {
  Box,
  Card,
  Chip,
  Container,
  Stack,
  Typography,
  ToggleButton,
  ToggleButtonGroup,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import {
  AutoGraph,
  Insights,
  Psychology,
  TrendingUp,
} from "@mui/icons-material";

const years = [
  "2011",
  "2012",
  "2013",
  "2014",
  "2015",
  "2016",
  "2017",
  "2018",
  "2019",
  "2020",
  "2021",
  "2022",
  "2023",
  "2024",
  "2025",
];

const subjectData = [
  {
    subject: "Environment",
    values: [19, 20, 17, 24, 19, 17, 14, 12, 18, 18, 15, 17, 18, 19, 19],
    color: "#19c880",
  },
  {
    subject: "Geography",
    values: [13, 12, 13, 11, 11, 3, 8, 7, 10, 10, 12, 10, 15, 17, 13],
    color: "#3b82f6",
  },
  {
    subject: "Science & Tech.",
    values: [15, 10, 15, 10, 7, 7, 8, 13, 12, 11, 11, 14, 9, 7, 9],
    color: "#8b5cf6",
  },
  {
    subject: "Polity",
    values: [7, 18, 15, 11, 13, 12, 23, 16, 15, 18, 17, 11, 15, 16, 18],
    color: "#f97316",
  },
  {
    subject: "Economics",
    values: [29, 17, 23, 11, 20, 28, 27, 25, 27, 20, 15, 20, 16, 16, 17],
    color: "#ef4444",
  },
  {
    subject: "History",
    values: [12, 21, 17, 24, 14, 17, 13, 21, 16, 19, 23, 15, 13, 11, 16],
    color: "#eab308",
  },
  {
    subject: "Current Affairs",
    values: [5, 2, 0, 9, 16, 16, 7, 6, 2, 4, 7, 13, 14, 14, 8],
    color: "#06b6d4",
  },
];

const insightCards = [
  {
    icon: <Insights />,
    title: "Data-Driven Insights",
  },
  {
    icon: <AutoGraph />,
    title: "11+ Years Analysis",
  },
  {
    icon: <TrendingUp />,
    title: "Real Exam Trends",
  },
  {
    icon: <Psychology />,
    title: "Smart Preparation",
  },
];

export default function UPSCInsightsSection() {
  const [view, setView] = useState("table");
  const [selectedSubject, setSelectedSubject] = useState(subjectData[0]);

  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box className="sample-test-wrapper">
      <Container maxWidth="xl">
        <Card elevation={0} className="sample-main-card">
          {/* TOP SECTION */}
          <Box
            sx={{
              px: { xs: 3, md: 6 },
              py: { xs: 4, md: 6 },
              background:
                "linear-gradient(135deg, #ffffff 0%, #f0fdf4 100%)",
            }}
          >
            <Stack
              direction={{ xs: "column", lg: "row" }}
              spacing={{ xs: 4, md: 6 }}
              alignItems="center"
            >
              {/* LEFT CONTENT */}
              <Box flex={1}>
                <Chip
                  label="UPSC INSIGHTS 2027"
                  sx={{
                    mb: 2,
                    background: "#dcfce7",
                    color: "#19c880",
                    fontWeight: 800,
                    letterSpacing: "0.5px",
                  }}
                />

                <Typography
                  sx={{
                    fontWeight: 900,
                    lineHeight: 1.1,
                    color: "#0f172a",
                    fontSize: {
                      xs: "2rem",
                      sm: "2.6rem",
                      md: "3.4rem",
                    },
                  }}
                >
                  UPSC Insights &
                  <Box
                    component="span"
                    sx={{
                      display: "block",
                      color: "#19c880",
                    }}
                  >
                    Exam Analysis
                  </Box>
                </Typography>

                <Typography
                  sx={{
                    mt: 2.5,
                    color: "#64748b",
                    lineHeight: 1.9,
                    maxWidth: "620px",
                    fontSize: {
                      xs: "0.95rem",
                      md: "1.02rem",
                    },
                  }}
                >
                  Understand UPSC trends, exam patterns, subject
                  weightage, and cut-offs from 2011–2025 and prepare
                  strategically for UPSC 2027.
                </Typography>

                {/* INSIGHT CARDS */}
                <Box
                  sx={{
                    mt: 4,
                    display: "grid",
                    gridTemplateColumns: {
                      xs: "1fr 1fr",
                      sm: "repeat(4,1fr)",
                    },
                    gap: 2,
                  }}
                >
                  {insightCards.map((item, index) => (
                    <Card
                      key={index}
                      elevation={0}
                      sx={{
                        p: 2,
                        borderRadius: "18px",
                        border: "1px solid #dcfce7",
                        background: "#ffffff",
                        textAlign: "center",
                      }}
                    >
                      <Box
                        sx={{
                          width: 50,
                          height: 50,
                          borderRadius: "14px",
                          background: "#dcfce7",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          mx: "auto",
                          mb: 1.5,
                          color: "#19c880",
                        }}
                      >
                        {item.icon}
                      </Box>

                      <Typography
                        sx={{
                          fontSize: {
                            xs: "0.78rem",
                            md: "0.9rem",
                          },
                          fontWeight: 700,
                          color: "#0f172a",
                          lineHeight: 1.4,
                        }}
                      >
                        {item.title}
                      </Typography>
                    </Card>
                  ))}
                </Box>
              </Box>

              {/* RIGHT STATS */}
              <Box
                sx={{
                  width: {
                    xs: "100%",
                    lg: 350,
                  },
                }}
              >
                <Stack spacing={2}>
                  {[
                    {
                      title: "15 Years",
                      subtitle: "Question Analysis",
                    },
                    {
                      title: "7 Subjects",
                      subtitle: "UPSC Coverage",
                    },
                    {
                      title: "100 Questions",
                      subtitle: "Real UPSC Pattern",
                    },
                    {
                      title: "365+ Tests",
                      subtitle: "Mock Test Series",
                    },
                  ].map((item, index) => (
                    <Card
                      key={index}
                      elevation={0}
                      sx={{
                        p: 2.5,
                        borderRadius: "20px",
                        background: "#ffffff",
                        border: "1px solid #e2e8f0",
                      }}
                    >
                      <Typography
                        sx={{
                          fontWeight: 900,
                          color: "#19c880",
                          fontSize: "1.5rem",
                        }}
                      >
                        {item.title}
                      </Typography>

                      <Typography
                        sx={{
                          color: "#64748b",
                          mt: 0.5,
                        }}
                      >
                        {item.subtitle}
                      </Typography>
                    </Card>
                  ))}
                </Stack>
              </Box>
            </Stack>
          </Box>

          {/* MAIN ANALYSIS SECTION */}
          <Box
            sx={{
              px: { xs: 2, md: 5 },
              py: { xs: 4, md: 6 },
            }}
          >
            {/* HEADING */}
            <Box textAlign="center" mb={5}>
              <Typography
                sx={{
                  fontWeight: 900,
                  color: "#0f172a",
                  fontSize: {
                    xs: "1.8rem",
                    md: "2.7rem",
                  },
                }}
              >
                UPSC Subject Weightage Trend
                <Box
                  component="span"
                  sx={{
                    color: "#19c880",
                  }}
                >
                  {" "}
                  (2011–2025)
                </Box>
              </Typography>

              <Typography
                sx={{
                  mt: 1.5,
                  color: "#64748b",
                }}
              >
                Subject-wise question distribution analysis
              </Typography>
            </Box>

            {/* SUBJECT BUTTONS */}
            <Stack
              direction="row"
              spacing={1.5}
              justifyContent="center"
              flexWrap="wrap"
              useFlexGap
              mb={4}
            >
              {subjectData.map((item, index) => (
                <Chip
                  key={index}
                  label={item.subject}
                  onClick={() => {
                    setSelectedSubject(item);
                    setView("graph");
                  }}
                  sx={{
                    px: 1,
                    py: 2.5,
                    borderRadius: "14px",
                    fontWeight: 700,
                    cursor: "pointer",
                    background:
                      selectedSubject.subject === item.subject &&
                      view === "graph"
                        ? item.color
                        : "#f1f5f9",
                    color:
                      selectedSubject.subject === item.subject &&
                      view === "graph"
                        ? "#fff"
                        : "#334155",

                    "&:hover": {
                      background: item.color,
                      color: "#fff",
                    },
                  }}
                />
              ))}
            </Stack>

            {/* TOGGLE */}
            <Box display="flex" justifyContent="center" mb={5}>
              <ToggleButtonGroup
                value={view}
                exclusive
                onChange={(e, val) => val && setView(val)}
                size={mobile ? "small" : "medium"}
              >
                <ToggleButton value="graph">
                  Graph View
                </ToggleButton>

                <ToggleButton value="table">
                  Table View
                </ToggleButton>
              </ToggleButtonGroup>
            </Box>

            {/* GRAPH VIEW */}
            {view === "graph" && (
              <Card
                elevation={0}
                sx={{
                  p: { xs: 2, md: 4 },
                  borderRadius: "28px",
                  border: "1px solid #e2e8f0",
                  background: "#ffffff",
                }}
              >
                <Stack
                  direction={{
                    xs: "column",
                    md: "row",
                  }}
                  justifyContent="space-between"
                  alignItems={{
                    xs: "flex-start",
                    md: "center",
                  }}
                  spacing={2}
                  mb={4}
                >
                  <Box>
                    <Typography
                      sx={{
                        fontWeight: 800,
                        fontSize: {
                          xs: "1.4rem",
                          md: "2rem",
                        },
                        color: "#0f172a",
                      }}
                    >
                      {selectedSubject.subject}
                    </Typography>

                    <Typography
                      sx={{
                        color: "#64748b",
                        mt: 1,
                      }}
                    >
                      UPSC Subject-wise Question Trend
                    </Typography>
                  </Box>

                  <Chip
                    label={`Highest : ${Math.max(
                      ...selectedSubject.values
                    )}`}
                    sx={{
                      background: `${selectedSubject.color}15`,
                      color: selectedSubject.color,
                      fontWeight: 700,
                    }}
                  />
                </Stack>

                {/* GRAPH */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "space-between",
                    gap: {
                      xs: 0.5,
                      md: 1.2,
                    },
                    height: {
                      xs: 260,
                      md: 340,
                    },
                    overflowX: "auto",
                    pb: 2,
                  }}
                >
                  {selectedSubject.values.map((value, index) => (
                    <Box
                      key={index}
                      sx={{
                        minWidth: mobile ? 24 : 42,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        sx={{
                          mb: 1,
                          fontWeight: 700,
                          fontSize: "0.75rem",
                          color: "#334155",
                        }}
                      >
                        {value}
                      </Typography>

                      <Box
                        sx={{
                          width: "100%",
                          height: `${value * 9}px`,
                          borderRadius: "14px 14px 0 0",
                          background: selectedSubject.color,
                        }}
                      />

                      <Typography
                        sx={{
                          mt: 1,
                          fontSize: "0.68rem",
                          color: "#64748b",
                        }}
                      >
                        {years[index]}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Card>
            )}

            {/* TABLE VIEW */}
            {view === "table" && (
              <Box className="analysis-table-wrapper">
                <table className="analysis-table">
                  <thead>
                    <tr>
                      <th className="table-head">Subject</th>

                      {years.map((year) => (
                        <th key={year} className="table-head">
                          {year}
                        </th>
                      ))}
                    </tr>
                  </thead>

                  <tbody>
                    {subjectData.map((item, index) => (
                      <tr key={index}>
                        <td
                          className="table-cell subject-cell"
                          style={{ color: item.color }}
                        >
                          {item.subject}
                        </td>

                        {item.values.map((value, idx) => (
                          <td key={idx} className="table-cell">
                            {value}
                          </td>
                        ))}
                      </tr>
                    ))}

                    <tr className="total-row">
                      <td className="table-cell total-cell">
                        Total
                      </td>

                      {years.map((year, index) => (
                        <td
                          key={index}
                          className="table-cell"
                          style={{ fontWeight: 700 }}
                        >
                          100
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </Box>
            )}
          </Box>

          {/* MOCK TEST SECTION */}
          <Box className="mock-test-section" px={4} pb={6}>
            <Box textAlign="center" mb={5}>
              <Typography
                sx={{
                  fontWeight: 900,
                  color: "#0f172a",
                  fontSize: {
                    xs: "1.8rem",
                    md: "2.5rem",
                  },
                }}
              >
                Mock Test Format
              </Typography>

              <Typography
                sx={{
                  mt: 1,
                  color: "#64748b",
                }}
              >
                Designed based on real UPSC Prelims examination pattern
              </Typography>
            </Box>

            <Box className="mock-card-grid">
              {[
                {
                  title: "Duration",
                  value: "2 Hours",
                  icon: "⏰",
                },
                {
                  title: "Total Questions",
                  value: "100",
                  icon: "❓",
                },
                {
                  title: "Negative Marking",
                  value: "1/3rd",
                  icon: "🎯",
                },
                {
                  title: "Difficulty",
                  value: "Real UPSC Standard",
                  icon: "📊",
                },
                {
                  title: "Includes",
                  value:
                    "Solutions, Review & Performance Tracking",
                  icon: "📄",
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  elevation={0}
                  className="mock-card"
                >
                  <Box className="mock-icon">
                    {item.icon}
                  </Box>

                  <Typography
                    sx={{
                      fontWeight: 800,
                      color: "#0f172a",
                      fontSize: "1rem",
                      mb: 1,
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    sx={{
                      color: "#19c880",
                      fontWeight: 900,
                      fontSize: {
                        xs: "1.1rem",
                        md: "1.3rem",
                      },
                      lineHeight: 1.5,
                    }}
                  >
                    {item.value}
                  </Typography>
                </Card>
              ))}
            </Box>
            {/* ================= TEST PLAN SECTION ================= */}

<Box className="upsc-plan-section">

  {/* HEADING */}
  <Box className="plan-heading-wrapper">

    <Typography className="plan-main-heading">
      UPSC 2026–2027
      <span className="green-text"> Test Plan</span>
    </Typography>

    <Typography className="plan-sub-heading">
      Day-wise subject allocation (June–May)
    </Typography>

  </Box>

  {/* TABLE */}
  <Box className="test-plan-wrapper">

    <Box className="test-plan-inner">

      {/* MONTH HEADER */}
      <Box className="month-grid">

        <Box className="empty-cell" />

        {[
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
        ].map((month) => (
          <Box key={month} className="month-box">
            {month}
          </Box>
        ))}
      </Box>

      {/* SUBJECT ROWS */}
      {[
        {
          day: "Mon",
          subject: "Environment",
          className: "env-box",
        },
        {
          day: "Tue",
          subject: "Geography",
          className: "geo-box",
        },
        {
          day: "Wed",
          subject: "Science & Tech",
          className: "sci-box",
        },
        {
          day: "Thu",
          subject: "Polity",
          className: "polity-box",
        },
        {
          day: "Fri",
          subject: "Economics",
          className: "eco-box",
        },
        {
          day: "Sat",
          subject: "History",
          className: "history-box",
        },
        {
          day: "Sun",
          subject: "CSAT",
          className: "csat-box",
        },
      ].map((row, rowIndex) => (
        <Box key={rowIndex} className="plan-row">

          <Box className="day-label">
            {row.day}
          </Box>

          {Array.from({ length: 12 }).map((_, index) => (
            <Box
              key={index}
              className={
  index >= 8
    ? "mock-test-box"
    : `subject-box ${row.className}`     
}
            >
              {index >= 8
                ? "Mock Test"
                : row.subject}
            </Box>
          ))}
        </Box>
      ))}

      {/* MAINS SECTION */}
      <Box className="mains-section">

        <Typography className="mains-heading">
          MAINS TEST PLAN
        </Typography>

        {/* ESSAY */}
        <Box className="plan-row">

          <Box className="day-label">
            Saturday
          </Box>

          {Array.from({ length: 12 }).map((_, index) => (
            <Box
              key={index}
              className="essay-box"
            >
              Essay & Ethics
            </Box>
          ))}
        </Box>

        {/* GS */}
        <Box className="plan-row">

          <Box className="day-label">
            Sunday
          </Box>

          {[
            "GS1",
            "GS1",
            "GS1",
            "GS2",
            "GS2",
            "GS2",
            "GS3",
            "GS3",
            "GS3",
            "GS4",
            "GS4",
            "Revision",
          ].map((item, index) => (
            <Box
              key={index}
              className="gs-box"
            >
              {item}
            </Box>
          ))}
        </Box>

      </Box>

    </Box>
  </Box>
</Box>
          </Box>
          
        </Card>
      </Container>
    </Box>
  );
}