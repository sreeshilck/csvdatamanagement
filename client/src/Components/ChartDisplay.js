import React, { useEffect } from 'react'
import Unav from './Unav'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
import axios from 'axios';

function ChartDisplay() {

    const [chartData, setChartData] = useState()

    useEffect( async () => {
        const {data} = await axios.get("http://localhost:4000/api/upload")
        console.log(data);
        setChartData(data)
    }, []);
    
    
    
const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const , 
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      },
    },
  };
  
   const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  return (
    <>
    <Unav/>
    <Bar options={options} data={data} />;
    </>
  )
}

export default ChartDisplay