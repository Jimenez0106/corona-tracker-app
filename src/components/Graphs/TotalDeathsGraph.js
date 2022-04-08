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

const TotalDeathsGraph = ({ history }) => {
  return (
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
  );
};

export default TotalDeathsGraph;
