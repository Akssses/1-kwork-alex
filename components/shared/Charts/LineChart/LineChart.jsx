import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);
import './LineChart.module.css'

const data = {
  labels: ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May','Jun', 'Jul'],
  datasets: [
    {
      label: '',
      data: [null, 25, 58, 38, 55, 95, 70, 60],
      fill: true,
      backgroundColor: '#03ff0758',
      borderColor: '#03ff07',
      textColor: '#fff',
      tension: 0.4,
    },
  ],
};

const options = {
  plugins: {
    legend: {
      display: false
    }
  },
  scales: {
    x: {
      grid: {
        display: false // remove x-axis gridlines
      }
    },
    y: {
      grid: {
        display: false // remove y-axis gridlines
      }
    }
  }
};



function LineChart() {
    return (
        <div className="line-chart w-[40vw] bg-[#1f2025ce] p-5 rounded-2xl">
          <h1 className='text-white font-semibold text-center'>Title</h1>
            <Line data={data} options={options}/>
        </div>
    )
}

export default LineChart

// const options = {
//   scales: {
//     yAxes: {
//         ticks: {
//           color: "#fff",
//           font:{
//               size:14,
//           }
//         },
//         gridLines: {
//           display: false,
//         }
//       },
//     xAxes: {
//         ticks: {
//           color: "#fff",
//           font:{
//               size:14,
//           }
//         },
//         gridLines: {
//           display: false,
//         }
//       },
//   },
// };