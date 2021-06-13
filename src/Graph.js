import React from 'react';
import { Line } from 'react-chartjs-2';

class Graph extends React.Component{

    render(){

        var d = new Date();
        let currentDate = parseInt(String(d).substring(8, 10));
        let currentMonth = String(d).substring(4, 7);

        let { chartData } = this.props;

        let minTempData = [];
        let maxTempData = [];
        let weekDate = [];

        console.log(chartData);

        


        for(let i=0; i<chartData.length; i++){

            let currentDay = chartData[i];
            let minTemp = currentDay.temp.min;

            minTempData.push(minTemp);
        }

        for(let i=0; i<chartData.length; i++){
            
            let currentDay = chartData[i];
            let maxTemp = currentDay.temp.max;

            maxTempData.push(maxTemp);
        }

        for(let i=0; i<chartData.length; i++){

            weekDate.push(`${currentDate} ${currentMonth}`);
            currentDate++;
        }

        return(

            <div id="chart">
                <Line id = "line-chart"
                    data = {{
                        labels: weekDate,
                        datasets: [
                            {
                                label: 'Max Temp',
                                data: maxTempData,
                                backgroundColor: 'red',
                                fill: false,
                                borderColor: 'red'
                            },

                            {
                                label: 'Min Temp',
                                data: minTempData,
                                backgroundColor: 'blue',
                                fill: false,
                                borderColor: 'blue'
                            },
                    
                    ]
                    }}

                    options = {{

                        responsive: true,
                        maintainAspectRatio: false,

                        scales: {
                            x: {
                                display: true,
                                title: {
                                    text: "This Week / chartData",
                                    display: true,
                                    padding: {top: 10, left: 0, right: 0, bottom: 0}
                                }
                            },

                            y: {
                                display: true,
                                title: {
                                    text: "Temperature in °C",
                                    display: true,
                                    padding: {top: 0, left: 0, right: 0, bottom: 10}
                                }
                            }
                        }
                    }}
                    width ={600}
                    height = {400}
                />
            </div>
        );
    }
}

export default Graph;