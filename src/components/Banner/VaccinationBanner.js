import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Spring, animated, useSpring } from "react-spring";
import bannerGif from "../../images/syringe.gif";

const VaccinationBanner = ({ vaccinated }) => {
  //React-spring counter animations
  const AnimatedTypography = animated(Typography);
  const vaccinatedProps = useSpring({
    val: vaccinated,
    from: { val: 0 },
  });
  return (
    <>
      <img className="d-none d-lg-flex" src={bannerGif} alt="Vaccine Gif" />
      {/* Banner Text */}
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
        {/* Title */}
        <Spring
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
          config={{ duration: 500 }}
        >
          {(props) => (
            <animated.div style={props}>
              <Typography variant="h4" sx={{ paddingBottom: 3 }}>
                Are You Vaccinated?
              </Typography>
            </animated.div>
          )}
        </Spring>
        {/* TEXT & COUNTER */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginBottom: 3,
          }}
        >
          {/* Counter */}
          <AnimatedTypography variant="h4">
            {vaccinatedProps.val.to((val) =>
              Math.floor(val).toLocaleString("en-US")
            )}
          </AnimatedTypography>
          {/* Text */}
          <Spring
            from={{ opacity: 0, marginRight: -500 }}
            to={{ opacity: 1, marginRight: 0 }}
            delay={2000}
            config={{ duration: 1000 }}
          >
            {(props) => (
              <animated.div style={props}>
                <Typography variant="body1">
                  {" "}
                  Vaccine doses have been administered in the US alone.
                </Typography>
              </animated.div>
            )}
          </Spring>
        </Box>
        {/* Appointment Text*/}
        <Spring
          from={{ opacity: 0, marginLeft: -500 }}
          to={{ opacity: 1, marginLeft: 0 }}
          delay={3000}
          config={{ duration: 1000 }}
        >
          {(props) => (
            <animated.div style={props}>
              <Typography variant="subtitle1">
                Schedule your appointment today!
              </Typography>
            </animated.div>
          )}
        </Spring>
        {/* Button */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: 10,
          }}
        >
          <Spring
            from={{ opacity: 0, marginLeft: -500 }}
            to={{ opacity: 1, marginLeft: 0 }}
            delay={4400}
            config={{ duration: 700 }}
          >
            {(props) => (
              <animated.div style={props}>
                <Button
                  variant="contained"
                  color="warning"
                  onClick={() => {
                    window.open("https://www.vaccines.gov/");
                  }}
                >
                  Create Appointment
                </Button>
              </animated.div>
            )}
          </Spring>
        </Box>
      </Box>
    </>
  );
};

export default VaccinationBanner;
