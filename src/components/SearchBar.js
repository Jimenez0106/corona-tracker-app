import React from "react";
import { TextField, Autocomplete, FormControl, styled } from "@mui/material";
import { Tooltip } from "@mui/material";

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

const SearchBar = ({ states, searchHandler, hiddenSearch, currState }) => {
  if (hiddenSearch) {
    return <></>;
  }
  return (
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
                style: { color: "orange" },
              }}
            />
          )}
        />
      </FormControl>
    </Tooltip>
  );
};

export default SearchBar;
