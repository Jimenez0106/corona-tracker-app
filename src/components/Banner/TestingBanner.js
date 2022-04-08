import React from "react";
import { Box, Button, Typography } from "@mui/material";
import swabTest from "../../images/swabTest.png";

const TestingBanner = () => {
  return (
    <>
      <Box
        sx={{
          textAlign: "center",
          alignItems: "center",
          height: 350,
          width: 435,
          paddingTop: 7,
          paddingBottom: 10,
        }}
      >
        {/* TITLE */}
        <Typography variant="h4" sx={{ paddingBottom: 3 }}>
          Need a Covid Test?
        </Typography>
        {/* TEXT */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginBottom: 3,
          }}
        >
          <Typography variant="body1">
            If you are experiencing symptoms, please call the testing site or
            your health care provider before you go for testing.
          </Typography>
        </Box>
        {/* Appointment Text */}
        <Typography variant="subtitle1">
          Find a testing site near you!
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: 10,
          }}
        >
          <Button
            variant="contained"
            color="warning"
            onClick={() => {
              window.open(
                "https://www.hhs.gov/coronavirus/community-based-testing-sites/index.html"
              );
            }}
          >
            Testing Locations
          </Button>
        </Box>
      </Box>
      <img
        className="d-none d-lg-flex"
        width="200"
        src={swabTest}
        alt="Covid test Logo"
      />
    </>
  );
};

export default TestingBanner;
