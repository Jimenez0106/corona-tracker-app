import React from "react";
import { Box, Typography } from "@mui/material";
import { animated } from "react-spring";
import PopulationCard from "./PopulationCard";
import CasesCard from "./CasesCard";
import DeathsCard from "./DeathsCard";

const Cards = ({ currCases, history }) => {
  const { population, todayDeaths, todayCases, deaths, active, tests } =
    currCases;

  //Get Today's Date
  const todaysDate = () => {
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    return (today = mm + "/" + dd + "/" + yyyy);
  };

  //Get latest data's date
  const latestDate = () => {
    let date = history[history.length - 1].date;
    const [year, month, day] = date.split("-");
    return [month, day, year].join("/");
  };

  //Backup data if today's data is unavailable
  //Latest death count
  const latestDeaths = () => {
    const latestDay = history[history.length - 1].deaths;
    const dayBefore = history[history.length - 2].deaths;
    return latestDay - dayBefore;
  };
  //Latest new cases
  const latestCases = () => {
    const latestDay = history[history.length - 1].cases;
    const dayBefore = history[history.length - 2].cases;
    return latestDay - dayBefore;
  };

  //React-spring animate typography
  const AnimatedTypography = animated(Typography);

  return (
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
      {/* Last Updated */}
      <Box sx={{ marginBottom: -10, marginTop: -5, color: "white" }}>
        {todayCases === 0 ? (
          <Typography sx={{ color: "orange" }}>
            *Updated as of {latestDate()}
          </Typography>
        ) : (
          <Typography>Updated as of {todaysDate()}</Typography>
        )}
      </Box>
      {/* Population Card */}
      <PopulationCard
        AnimatedTypography={AnimatedTypography}
        population={population}
        tests={tests}
      />
      {/* Cases Card */}
      <CasesCard
        AnimatedTypography={AnimatedTypography}
        todayCases={todayCases}
        latestCases={latestCases}
        active={active}
      />
      {/* Deaths Card */}
      <DeathsCard
        AnimatedTypography={AnimatedTypography}
        todayDeaths={todayDeaths}
        latestDeaths={latestDeaths}
        deaths={deaths}
      />
    </Box>
  );
};

export default Cards;
