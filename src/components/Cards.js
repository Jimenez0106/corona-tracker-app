import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Skeleton,
  Typography,
} from "@mui/material";
import CountUp from "react-countup";

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

  console.log(currCases);
  //Backup data
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

  if (!history)
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
    );
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
      <Typography sx={{ marginBottom: -10, marginTop: -5, color: "white" }}>
        {todayCases === 0 ? (
          <Typography sx={{ color: "orange" }}>
            *Updated as of {latestDate()}
          </Typography>
        ) : (
          <Typography>Updated as of {todaysDate()}</Typography>
        )}
      </Typography>
      {/* Population Card */}
      <Card sx={{ width: 350, backgroundColor: "#292929", color: "white" }}>
        {/* Title */}
        <CardHeader
          title="Population"
          sx={{
            marginBottom: -3,
            borderTop: "solid green 15px",
          }}
        />
        <CardContent>
          {/* Counter */}
          <Typography variant="h2">
            <CountUp start={7} end={population} duration={5} separator="," />
          </Typography>
          {/* Sub Coutner */}
          <Typography variant="h6" color="gray">
            <CountUp
              start={0}
              end={tests}
              duration={5}
              suffix=" "
              separator=","
            />
            tests conducted
          </Typography>
        </CardContent>
      </Card>
      {/* Cases Card */}
      <Card sx={{ width: 350, backgroundColor: "#292929", color: "white" }}>
        {/* Title */}
        <CardHeader
          title="Cases Today"
          sx={{
            marginBottom: -3,
            borderTop: "solid yellow 15px",
          }}
        />
        {/*  Active cases */}
        {todayCases === 0 ? (
          <CardContent>
            <Typography variant="h2">
              <CountUp
                start={0}
                end={latestCases()}
                duration={6}
                separator=","
              />
            </Typography>
            <Typography variant="h6" color="gray">
              current active cases unavailable
            </Typography>
          </CardContent>
        ) : (
          <CardContent>
            <Typography variant="h2">
              <CountUp start={0} end={todayCases} duration={6} separator="," />
            </Typography>
            <Typography variant="h6" color="gray">
              <CountUp
                start={0}
                end={active}
                duration={5}
                separator=","
                suffix=" "
              />
              active cases
            </Typography>
          </CardContent>
        )}
      </Card>
      {/* Deaths Card */}
      <Card sx={{ width: 350, backgroundColor: "#292929", color: "white" }}>
        <CardHeader
          title="Deaths Today"
          sx={{
            marginBottom: -3,
            borderTop: "solid red 15px",
          }}
        />
        {todayDeaths === 0 ? (
          <CardContent>
            <Typography variant="h2">
              <CountUp
                start={0}
                end={latestDeaths()}
                duration={7}
                separator=","
              />
            </Typography>
            <Typography variant="h6" color="gray">
              <CountUp
                start={0}
                end={deaths}
                duration={5}
                separator=","
                suffix=" "
              />
              total deaths
            </Typography>
          </CardContent>
        ) : (
          <CardContent sx={{ backgroundColor: "#292929", color: "white" }}>
            <Typography variant="h2">
              <CountUp start={0} end={todayDeaths} duration={7} separator="," />
            </Typography>
            <Typography variant="h6" color="gray">
              <CountUp
                start={0}
                end={deaths}
                duration={5}
                separator=","
                suffix=" "
              />
              total deaths
            </Typography>
          </CardContent>
        )}
      </Card>
    </Box>
  );
};

export default Cards;
