import React from "react";
import { Box, Card, CardContent, CardHeader, Typography } from "@mui/material";
import { useSpring } from "react-spring";

const CasesCard = ({ AnimatedTypography, todayCases, latestCases, active }) => {
  //React-Spring Animations
  const latestCasesProps = useSpring({
    val: latestCases(),
    from: { val: 0 },
    config: { duration: 2800 },
  });
  const todayCasesProps = useSpring({
    val: todayCases,
    from: { val: 0 },
    config: { duration: 2800 },
  });
  const activeProps = useSpring({
    val: active,
    from: { val: 0 },
    config: { duration: 3200 },
  });
  return (
    <Card sx={{ width: 350, backgroundColor: "#292929", color: "white" }}>
      {/* Title */}
      <CardHeader
        title="Cases Today"
        sx={{
          marginBottom: -3,
          borderTop: "solid yellow 15px",
        }}
      />
      {/*  Active Cases Counter*/}
      {todayCases === 0 ? (
        //Yesterday's Cases
        <CardContent>
          <AnimatedTypography variant="h2">
            {latestCasesProps.val.to((val) =>
              Math.floor(val).toLocaleString("en-US")
            )}
          </AnimatedTypography>
          <Typography variant="h6" color="gray">
            Current active cases unavailable
          </Typography>
        </CardContent>
      ) : (
        //Today's Cases
        <CardContent>
          <AnimatedTypography variant="h2">
            {todayCasesProps.val.to((val) =>
              Math.floor(val).toLocaleString("en-US")
            )}
          </AnimatedTypography>
          <Box color="gray" sx={{ display: "flex", flexDirection: "row" }}>
            <AnimatedTypography variant="h6">
              {activeProps.val.to((val) =>
                Math.floor(val).toLocaleString("en-US")
              )}
            </AnimatedTypography>
            <h4>&nbsp;active cases</h4>
          </Box>
        </CardContent>
      )}
    </Card>
  );
};

export default CasesCard;
