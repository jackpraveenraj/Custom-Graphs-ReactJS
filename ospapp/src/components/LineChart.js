import React from 'react'
import {Line} from 'react-chartjs-2'

const LineChart = () => {
    return (
        <div>
            
        <Line
        data={{
          labels: ['05/09/21', '06/09/21', '07/09/21', '08/09/21', '09/09/21'],
          
          datasets: [
            {
            label: 'Awaken moments',
            data: [21, 20, 28, 26, 27],
            backgroundColor: 
                'rgba(153, 102, 255, 0.2)',
            borderColor: 
                'rgba(153, 102, 255, 1)',
            borderWidth: 1,
          },
  
          {
            label: 'Awaken_min',
            data: [19,50,64,55,51],
            backgroundColor: 'rgba(255, 157, 0, 0.4)',
            borderColor: 'rgba(255, 157, 0, 1)',
            borderWidth: 1,
          },
  
        ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks:{
                  beginAtZero: true
                }
              }
            ]
          }
        }}
  
        />
        
        </div>
    )



}

export default LineChart