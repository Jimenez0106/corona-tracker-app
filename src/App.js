import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Loading from "./components/Loading";
import { Box } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  const [states, setStates] = useState([]);
  const [currState, setCurrState] = useState("New York");
  const [currCases, setCurrCases] = useState({});
  const [history, setHistory] = useState("");
  const [vaccinated, setVaccinated] = useState(0);
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    //Fetch the history of selected State
    const fetchCaseHistory = async (currState) => {
      try {
        const res = await axios.get(
          `https://disease.sh/v3/covid-19/nyt/states/${currState}?lastdays=all`
        );
        setHistory(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    //Fetch total vaccinations administered
    const fetchVaccinated = async () => {
      try {
        const res = await axios.get(
          "https://disease.sh/v3/covid-19/vaccine/coverage/states?lastdays=1&fullData=true"
        );
        let vaccinatedCount = 0;
        res.data.forEach((state) => {
          vaccinatedCount += state.timeline[0].total;
        });
        setVaccinated(vaccinatedCount);
      } catch (err) {
        console.log(err);
      }
    };
    //Fetch the US current cases
    const fetchUSCases = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`https://disease.sh/v3/covid-19/states`);
        //Obtain updated State List
        setProgress(33);
        let stateList = [];
        res.data.forEach((state) => {
          stateList.push(state.state);
        });
        setStates(stateList.sort());
        //Get selected state's current cases
        const index = res.data.findIndex((state) => state.state === currState);
        setCurrCases(res.data[index]);
        fetchCaseHistory(currState);
        setProgress(66);
        fetchVaccinated();
        setProgress(100);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    fetchUSCases();
  }, [currState]);

  //Set current state to searched location
  const searchHandler = (value) => {
    setCurrState(value);
  };

  return (
    //Main Page
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
      }}
    >
      <Router>
        <Header
          currState={currState}
          states={states}
          searchHandler={searchHandler}
        />
        {loading ? (
          <Loading progress={progress} />
        ) : (
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  currState={currState}
                  currCases={currCases}
                  history={history}
                  vaccinated={vaccinated}
                />
              }
            />
            <Route path="/about" element={<About />} />
          </Routes>
        )}
      </Router>
    </Box>
  );
};

export default App;
