import React from "react";
import { Spring, animated } from "react-spring";
import CountUp from "react-countup";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import { Box, Button, Typography } from "@mui/material";
import bannerGif from "../images/syringe.gif";
import swabTest from "../images/swabTest.png";
import "swiper/css";
import "swiper/css/pagination";

// configure Swiper to use modules
SwiperCore.use([Pagination, Autoplay]);

const Banner = ({ vaccinated }) => {
  return (
    <Box sx={{ boxShadow: 1 }}>
      {/* Swipe Settings */}
      <Swiper pagination={true} autoplay={{ delay: 10000 }}>
        {/* SLIDE 1 */}
        <SwiperSlide className="BannerSlider">
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
              <CountUp
                className="BannerCounter"
                start={0}
                end={vaccinated}
                duration={3}
                separator=","
                suffix=" "
              />
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
        </SwiperSlide>
        {/* SLIDE 2 */}
        <SwiperSlide className="BannerSlider2">
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
                If you are experiencing symptoms, please call the testing site
                or your health care provider before you go for testing.
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
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default Banner;
