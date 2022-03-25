import React from "react";
import Banner from "../components/Banner";
import Cards from "../components/Cards";
import Graphs from "../components/Graphs";
import GraphsMobile from "../components/GraphsMobile";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

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

          <Typography variant="h3" textAlign="center">
            {currState}
          </Typography>

      </Box>
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
        <Cards currCases={currCases} history={history} />
        {/* Desktop Graphs */}
        <Graphs history={history} />
      </Box>
      <GraphsMobile history={history} />
    </>
  );
};

export default Home;
