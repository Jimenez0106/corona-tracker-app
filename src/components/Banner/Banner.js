import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import { Box, createTheme } from "@mui/material";
import VaccinationBanner from "./VaccinationBanner";
import TestingBanner from "./TestingBanner";
import { ThemeProvider } from "@mui/system";
import "swiper/css";
import "swiper/css/pagination";

//MUI Button Theme
const theme = createTheme({
  palette: {
    type: "light",
    warning: {
      main: "#e69500",
      contrastText: "#fff",
      dark: "#b88100",
    },
  },
});

// configure Swiper to use modules
SwiperCore.use([Pagination, Autoplay]);

const Banner = ({ vaccinated }) => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ boxShadow: 1 }}>
        {/* Swipe Settings */}
        <Swiper pagination={true} autoplay={{ delay: 7500 }}>
          {/* SLIDE 1 */}
          <SwiperSlide className="BannerSlider">
            <VaccinationBanner vaccinated={vaccinated} />
          </SwiperSlide>

          {/* SLIDE 2 */}
          <SwiperSlide className="BannerSlider2">
            <TestingBanner />
          </SwiperSlide>
        </Swiper>
      </Box>
    </ThemeProvider>
  );
};

export default Banner;
