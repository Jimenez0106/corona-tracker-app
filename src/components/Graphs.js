import { Box } from "@mui/material";
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Graphs = ({ history }) => {
  return (
    //Desktop Graphs
    <Box
      className="d-none d-lg-flex"
      sx={{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: 5000,
        height: 800,
        gap: 5,
      }}
    >
      {/* Total Cases Graphs */}
      <ResponsiveContainer width="90%" height={400}>
        <AreaChart
          width={500}
          height={200}
          data={history}
          syncId="syncId"
          margin={{
            top: 0,
            right: 0,
            left: 20,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" fill="#292929" />
          <XAxis
            tick={{ fill: "white" }}
            dataKey="date"
            width="50"
            //Format date 'YYYY-MM-DD' > 'MM/DD'
            tickFormatter={(date) => {
              if (date) {
                return date.slice(5).replaceAll("-", "/");
              }
              return;
            }}
          />
          <YAxis
            tick={{ fill: "white" }}
            //Format number '1,000,000' > '1M'
            tickFormatter={(number) => {
              return (number / 1000000).toLocaleString() + "M";
            }}
          />

          <Tooltip
            //Add commas to Tooltip
            formatter={(value) => new Intl.NumberFormat("en").format(value)}
            //Format date on Tooltip
            labelFormatter={(date) => {
              const dateObj = new Date(date);
              if (!isNaN(dateObj.getTime())) {
                return (
                  dateObj.getMonth() +
                  1 +
                  "/" +
                  dateObj.getDate() +
                  "/" +
                  dateObj.getFullYear()
                );
              }
            }}
          />
          <Area
            type="monotone"
            dataKey="cases"
            stackId="1"
            stroke="green"
            fill="green"
          />
        </AreaChart>
      </ResponsiveContainer>
      {/* Total Deaths Graph */}
      <ResponsiveContainer width="90%" height={400}>
        <AreaChart
          width={500}
          height={200}
          data={history}
          syncId="syncId"
          margin={{
            top: 0,
            right: 0,
            left: 20,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" fill="#292929"/>
          <XAxis
            tick={{ fill: "white" }}
            dataKey="date"
            //Format date 'YYYY-MM-DD' > 'MM/DD'
            tickFormatter={(date) => {
              if (date) {
                return date.slice(5).replaceAll("-", "/");
              }
              return;
            }}
          />
          <YAxis
            tick={{ fill: "white" }}
            //Format number '1,000,000' > '1M'
            tickFormatter={(number) => {
              return number.toLocaleString();
            }}
          />
          <Tooltip
            //Add commas to Tooltip
            formatter={(value) => new Intl.NumberFormat("en").format(value)}
            //Format date on Tooltip
            labelFormatter={(date) => {
              const dateObj = new Date(date);
              if (!isNaN(dateObj.getTime())) {
                return (
                  dateObj.getMonth() +
                  1 +
                  "/" +
                  dateObj.getDate() +
                  "/" +
                  dateObj.getFullYear()
                );
              }
            }}
          />
          <Area
            type="monotone"
            dataKey="deaths"
            stackId="1"
            stroke="red"
            fill="red"
          />
        </AreaChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default Graphs;
