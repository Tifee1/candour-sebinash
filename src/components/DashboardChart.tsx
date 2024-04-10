import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,

  Tooltip,

  Filler
)

const dummyData = [
  { month: 'Jan', value: 23 },
  { month: 'Feb', value: 45 },
  { month: 'Mar', value: 56 },
  { month: 'Apr', value: 34 },
  { month: 'May', value: 67 },
  { month: 'Jun', value: 78 },
  { month: 'Jul', value: 89 },
  { month: 'Aug', value: 54 },
  { month: 'Sep', value: 76 },
  { month: 'Oct', value: 43 },
  { month: 'Nov', value: 32 },
  { month: 'Dec', value: 65 },
]

export const data = {
  labels: dummyData.map((item) => item.month),
  datasets: [
    {
      label: '',
      data: dummyData.map((item) => item.value),
      tension: 0.4,
      borderColor: '#57CADB',
      backgroundColor: '#57CADB',
      pointRadius: 0,
      fill: true,
      fillColor: '#57CADB',
      scales: {
        x: {
          grid: {
            display: false,
          },
        },
        y: {
          grid: {
            display: false,
          },
        },
      },
    },
  ],
}

const DashboardChart = () => {
  return (
    <Line
      options={{
        responsive: true,
        maintainAspectRatio: false,
        hover: {
          mode: 'index',
          intersect: false,
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
          },
          y: {
            grid: {
              display: false,
            },
          },
        },
      }}
      data={data}
    />
  )
}

export default DashboardChart
