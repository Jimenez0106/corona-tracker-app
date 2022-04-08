import React from "react";
import {
  TextField,
  Autocomplete,
  FormControl,
  styled,
  Tooltip,
} from "@mui/material";
import { useLocation } from "react-router-dom";

//MUI Styling
const StyledAutocomplete = styled(Autocomplete)({
  "& .MuiInputLabel-outlined:not(.MuiInputLabel-shrink)": {
    transform: "translate(34px, 20px) scale(1);",
  },
  "& .MuiAutocomplete-inputRoot": {
    color: "white",
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "gray",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "white",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "white",
    },
  },
});

const SearchBar = ({ states, searchHandler, currState }) => {
  const pageLocation = useLocation();
  return pageLocation.pathname === "/" ? (
    <Tooltip title="Search for a location..." placement="left">
      <FormControl>
        <StyledAutocomplete
          onChange={(event, value) => {
            searchHandler(value);
          }}
          disableClearable
          disablePortal
          sx={{
            width: 150,
            "&:hover": {
              backgroundColor: "#313131",
            },
          }}
          id="US-States"
          autoSelect
          options={states}
          renderInput={(state) => (
            <TextField
              {...state}
              label={currState}
              variant="outlined"
              InputLabelProps={{
                style: { color: "#ECA500" },
              }}
            />
          )}
        />
      </FormControl>
    </Tooltip>
  ) : (
    <></>
  );
};

export default SearchBar;
