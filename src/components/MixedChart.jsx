"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineController,
  BarController,
} from "chart.js";
import { Chart } from "react-chartjs-2";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "@/app/redux/reducers/dataReducer";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineController,
  BarController
);

const MixedChart = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://lunara-api.vercel.app/api/data");
        if (response.ok) {
          const data = await response.json();
          const transformedData = {
            netProfit: data.map((item) => item.netProfit),
            balance: data.map((item) => item.balance),
            cost: data.map((item) => item.cost),
            revenue: data.map((item) => item.revenue),
          };
          dispatch(setData(transformedData));
        } else {
          throw new Error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [dispatch]);

  // console.log(netProfit);
  // console.log(balance);
  const { netProfit, balance, cost, revenue } = useSelector(
    (state) => state.data
  );
  console.log(netProfit);
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        type: "line",
        label: "Net/Gross Profit",
        borderColor: "rgba(254, 200, 75, 1)",
        borderWidth: 4,
        fill: false,
        data: netProfit,
      },
      {
        type: "bar",
        label: "Balance",
        backgroundColor: "rgba(0, 70, 255, 1)",
        data: balance,
        borderColor: "white",
        borderWidth: 2,
      },
      {
        type: "bar",
        label: "Cost",
        backgroundColor: "rgba(240, 62, 255, 1)",
        data: cost,
      },
      {
        type: "bar",
        label: "Revenue",
        backgroundColor: "rgba(157, 231, 255, 1)",
        data: revenue,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Mixed Chart",
      },
    },
  };

  return <Chart type="bar" data={data} options={options} />;
};

export default MixedChart;
