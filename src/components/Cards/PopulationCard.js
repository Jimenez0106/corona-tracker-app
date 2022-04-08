import React from "react";
import { Box, Card, CardContent, CardHeader } from "@mui/material";
import { useSpring } from "react-spring";

const PopulationCard = ({ AnimatedTypography, population, tests }) => {
  //React-Spring Animations
  const populationProps = useSpring({
    val: population,
    from: { val: 0 },
    config: { duration: 2000 },
  });
  const testsProps = useSpring({
    val: tests,
    from: { val: 0 },
    config: { duration: 2400 },
  });
  return (
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
        {/* Population Counter */}
        <AnimatedTypography variant="h2">
          {populationProps.val.to((val) =>
            Math.floor(val).toLocaleString("en-US")
          )}
        </AnimatedTypography>
        {/* Tests Conducted Counter */}
        <Box color="gray" sx={{ display: "flex", flexDirection: "row" }}>
          <AnimatedTypography variant="h6">
            {testsProps.val.to((val) =>
              Math.floor(val).toLocaleString("en-US")
            )}
          </AnimatedTypography>
          <h4>&nbsp;tests conducted</h4>
        </Box>
      </CardContent>
    </Card>
  );
};

export default PopulationCard;
