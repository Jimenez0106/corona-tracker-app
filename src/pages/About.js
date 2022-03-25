import React from "react";
import green from "../images/green.png";
import yellow from "../images/yellow.png";
import red from "../images/red.png";
import greenGraph from "../images/greenGraph.png";
import redGraph from "../images/redGraph.png";
import { Divider, Typography } from "@mui/material";
import { Box } from "@mui/material";

const About = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
        color: "white",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "flex-end", height: 175 }}>
        <Typography variant="h2">About</Typography>
      </Box>
      <Divider sx={{ width: 175, marginBottom: 1, marginTop: 0 }} />
      {/* About API */}
      <Box
        sx={{
          marginBottom: 5,
          height: "50%",
          maxWidth: "40%",
          minWidth: "350px",
        }}
      >
        <Typography variant="body1" sx={{ textAlign: "center" }}>
          This application tracks the conditions of COVID-19 in the United
          States. The data is sourced from{" "}
          <a href="https://www.worldometers.info/coronavirus/">Worldometers</a>{" "}
          and <a href="https://coronavirus.jhu.edu/">John Hopkins University</a>{" "}
          which are both every afternoon. By using the search bar on the top,
          users are able to obtain up-to-date information on states and
          territories of the United States.
        </Typography>
      </Box>
      {/* CARDS */}
      {/* Green Card Info */}
      <Box
        sx={{
          display: "flex",
          position: "relative",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
          minHeight: 250,
          width: "80%",
          marginBottom: 5,
          minWidth: "350px",
        }}
      >
        <img
          src={green}
          alt="Green Card"
          className="InfoImg hvr-float hvr-grow"
        />
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            minWidth: 150,
            maxWidth: 350,
            width: "100%",
          }}
        >
          The green card displays the population and number of COVID-19 tests
          conducted.
        </Typography>
      </Box>
      {/* Yellow Card Info */}
      <Box
        sx={{
          display: "flex",
          position: "relative",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
          minHeight: 250,
          width: "80%",
          marginBottom: 5,
          minWidth: "350px",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            minWidth: 150,
            maxWidth: 350,
            width: "100%",
          }}
        >
          The yellow card displays the total number of COVID-19 cases found
          today and the current active amount of on-going cases.
        </Typography>
        <img
          src={yellow}
          alt="Yellow Card"
          className="InfoImg hvr-float hvr-grow"
        />
      </Box>
      {/* Red Card Info */}
      <Box
        sx={{
          display: "flex",
          position: "relative",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
          minHeight: 250,
          width: "80%",
          marginBottom: 5,
          minWidth: "350px",
        }}
      >
        <img src={red} alt="Red Card" className="InfoImg hvr-float hvr-grow" />
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            minWidth: 150,
            maxWidth: 350,
            width: "100%",
          }}
        >
          The red card displays the deaths of today and the total amount of
          people who have recovered from COVID-19.
        </Typography>
      </Box>
      {/* GRAPHS */}
      {/* Green Graph Info */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          maxWidth: "1200px",
          minHeight: 300,
          marginBottom: 5,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            minWidth: 187,
            maxWidth: 800,
            width: "100%",
            marginBottom: 1,
          }}
        >
          The green graph represents the total number of cases recorded from
          March 2020 to present day.
        </Typography>
        <img
          src={greenGraph}
          alt="Green Graph"
          className="InfoImgGraph hvr-float hvr-grow"
        />
      </Box>
      {/*Red Graph Info */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          maxWidth: "1200px",
          minHeight: 300,
          marginBottom: 3,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            minWidth: 187,
            maxWidth: 800,
            width: "100%",
            marginBottom: 1,
          }}
        >
          The red graph represents the total number of deaths recorded.
        </Typography>
        <img
          src={redGraph}
          alt="Red Graph"
          className="InfoImgGraph hvr-float hvr-grow"
        />
      </Box>

      <Box sx={{ textAlign: "center" }}>
        <Typography variant="subtitle1">
          **Selected locations may display data from the day before due today's
          data not yet being uploaded by the territory.
        </Typography>
        <Typography variant="subtitle2">
          For more information on COVID-19 APIs and other disease-related
          statistics, visit <a href="https://disease.sh/docs/#/">Disease.sh</a>.
        </Typography>
      </Box>
    </Box>
  );
};

export default About;
