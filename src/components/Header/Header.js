import React from "react";
import { Typography, AppBar, Toolbar, Button, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import SearchBar from "./SearchBar"

const Header = ({
  states,
  searchHandler,
  currState,
}) => {
  return (
    <Box>
      {/* Navbar */}
      <AppBar
        position="fixed"
        sx={{
          background: "#060606",
          color: "white",
          padding: 0.5,
          width: "100%",
        }}
      >
        <Toolbar>
          {/* Title */}
          <Typography
            variant="h4"
            component="div"
            className="d-none d-lg-flex"
            paddingRight={3}
          >
            US SARS-CoV-2 Tracker
          </Typography>
          {/* Button Container */}
          <Box sx={{ flexGrow: 1 }}>
            <Stack spacing={2} direction="row">
              {/* HOME */}
              <Button

                variant="outlined"
                component={Link}
                to="/"
                sx={{
                  fontWeight: "bold",
                  border: "2px solid gray",
                  color: "white",
                  borderRadius: 15,
                  "&:hover": {
                    border: "2px solid white",
                    backgroundColor: "#313131",
                    color: "orange",
                  },
                }}
              >
                Home
              </Button>
              {/* ABOUT */}
              <Button

                variant="outlined"
                component={Link}
                to="/about"
                sx={{
                  fontWeight: "bold",
                  border: "2px solid gray",
                  color: "white",
                  borderRadius: 15,
                  "&:hover": {
                    border: "2px solid white",
                    backgroundColor: "#313131",
                    color: "orange",
                  },
                }}
              >
                About
              </Button>
            </Stack>
          </Box>
          {/* SEARCH BAR */}
          <SearchBar
            currState={currState}
            states={states}
            searchHandler={searchHandler}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
