import React from "react";
import { Box, LinearProgress } from "@mui/material";

const Loading = ({ progress }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        height: 78,
        backgroundColor: "#1a2027",
      }}
    >
      <LinearProgress
        variant="determinate"
        value={progress}
        color="success"
        style={{ width: "100%", height: 10 }}
      />
    </Box>
  );
};

export default Loading;
