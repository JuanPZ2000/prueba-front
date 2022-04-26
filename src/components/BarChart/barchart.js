import React, { useMemo } from "react";
import AppDataService from '../../services/mongo.js'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);


var scores = [0, 0, 0, 0 ,0]
const retrieveBalance = () => {
  function sortBalances(data){
    scores[0] = data.balanceRecaudadora
    scores[1] = data.balanceEcopetrol
    scores[2] = data.balanceDeudaPrivada 
    scores[3] = data.balanceAcciones 
    scores[4] = data.balanceDinamica 
  }
  try {
    var promise = AppDataService.getFundBalance()
    promise.then(result => sortBalances(result.data)).catch( err => console.log(err));
    } catch (e) {
    console.error(
      `${e}`,
    )
  }
} 

const labels = ['FPV_BTG_PACTUAL_RECAUDADORA', 'FPV_BTG_PACTUAL_ECOPETROL', 'DEUDAPRIVADA', 'FDO-ACCIONES', 'FPV_BTG_PACTUAL_DINAMICA'];

const options = {
  fill: true,
  animations: false,
  scales: {
    y: {
      min: 0,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      display: true,
    },
  },
};


export default function BarChart() {
  retrieveBalance()
  var data = useMemo(function () {
    return {
      datasets: [
        {
          label: "Saldo invertido",
          tension: 1,
          data: scores,
          borderColor: "rgb(0, 0, 0)",
          backgroundColor: "rgb(0, 30, 98)",
        },
      ],
      labels,
    };
  }, []);

  return (
    <div className="App">
      <Bar data={data} options={options} />
    </div>
  );
}