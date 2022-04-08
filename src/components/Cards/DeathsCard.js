import React from "react";
import { Box, Card, CardContent, CardHeader } from "@mui/material";
import { useSpring } from "react-spring";

const DeathsCard = ({ AnimatedTypography, todayDeaths, latestDeaths, deaths }) => {
  //React-Spring Animations
  const latestDeathsProps = useSpring({
    val: latestDeaths(),
    from: { val: 0 },
    config: { duration: 3600 },
  });
  const deathsProps = useSpring({
    val: deaths,
    from: { val: 0 },
    config: { duration: 3600 },
  });
  const todayDeathsProps = useSpring({
    val: todayDeaths,
    from: { val: 0 },
    config: { duration: 4000 },
  });
  return (
    <Card sx={{ width: 350, backgroundColor: "#292929", color: "white" }}>
      <CardHeader
        title="Deaths Today"
        sx={{
          marginBottom: -3,
          borderTop: "solid red 15px",
        }}
      />
      <CardContent>
        {todayDeaths === 0 ? (
          //Yesterday's Data
          <AnimatedTypography variant="h2">
            {latestDeathsProps.val.to((val) =>
              Math.floor(val).toLocaleString("en-US")
            )}
          </AnimatedTypography>
        ) : (
          //Today's Data
          <AnimatedTypography variant="h2">
            {todayDeathsProps.val.to((val) =>
              Math.floor(val).toLocaleString("en-US")
            )}
          </AnimatedTypography>
        )}
        <Box color="gray" sx={{ display: "flex", flexDirection: "row" }}>
          <AnimatedTypography variant="h6">
            {deathsProps.val.to((val) =>
              Math.floor(val).toLocaleString("en-US")
            )}
          </AnimatedTypography>
          <h4>&nbsp;total deaths</h4>
        </Box>
      </CardContent>
    </Card>
  );
};

export default DeathsCard;
