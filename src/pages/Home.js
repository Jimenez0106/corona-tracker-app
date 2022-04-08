import React from "react";
import Banner from "../components/Banner/Banner";
import Cards from "../components/Cards/Cards";
import Graphs from "../components/Graphs/Graphs";
import { Box } from "@mui/system";
import { Skeleton, Typography } from "@mui/material";

const Home = ({ currState, currCases, history, vaccinated }) => {
  return (
    <>
      <Banner vaccinated={vaccinated} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          color: "white",
          width: "100%",
          paddingTop: 2,
        }}
      >
        {/* State Title */}
        <Typography variant="h3" textAlign="center">
          {currState}
        </Typography>
      </Box>
      {/* Main Container */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          height: "100%",
          padding: 1,
          marginBottom: 5,
          marginTop: 5,
        }}
      >
        {/* Cards */}
        {history ? (
          <Cards currCases={currCases} history={history} />
        ) : (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              height: 800,
              width: "100%",
              minWidth: 350,
            }}
          >
            <Skeleton
              sx={{ bgcolor: "grey.900" }}
              variant="rectangular"
              width="350px"
              height="200px"
              animation="wave"
            />
            <Skeleton
              sx={{ bgcolor: "grey.900" }}
              variant="rectangular"
              width="350px"
              height="200px"
              animation="wave"
            />
            <Skeleton
              sx={{ bgcolor: "grey.900" }}
              variant="rectangular"
              width="350px"
              height="200px"
              animation="wave"
            />
          </Box>
        )}
        {/* Desktop Graphs */}
        {history ? (
          <Box
            className="d-none d-lg-flex"
            sx={{
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: 5000,
              height: 800,
              gap: 5,
            }}
          >
            <Graphs history={history} />
          </Box>
        ) : (
          <>
            <Box
              className="d-none d-lg-flex"
              sx={{
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
                width: 5000,
                height: 800,
                gap: 5,
                marginLeft: 11,
                marginTop: -2.5,
              }}
            >
              <Skeleton
                sx={{ bgcolor: "grey.900" }}
                variant="rectangular"
                width="949px"
                height="370px"
                animation="wave"
              />
              <Skeleton
                sx={{ bgcolor: "grey.900" }}
                variant="rectangular"
                width="949px"
                height="370px"
                animation="wave"
              />
            </Box>
          </>
        )}
      </Box>
      {/* Mobile Graph */}
      {history ? (
        <Box
          className="d-lg-none"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 5,
          }}
        >
          <Graphs history={history} />
        </Box>
      ) : (
        <Box
          className="d-lg-none"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 5,
          }}
        >
          <Skeleton
            sx={{ bgcolor: "grey.900" }}
            variant="rectangular"
            width="85%"
            height="370px"
            animation="wave"
          />
          <Skeleton
            sx={{ bgcolor: "grey.900" }}
            variant="rectangular"
            width="85%"
            height="370px"
            animation="wave"
          />
        </Box>
      )}
    </>
  );
};

export default Home;
