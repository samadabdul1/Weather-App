import React from 'react';
import { Line } from 'react-chartjs-2';
import styled from 'styled-components'
class Graph extends React.Component{

    render(){
        
        var d = new Date();
        let Date_Today = parseInt(String(d).substring(8, 10));
        let Month = String(d).substring(4, 7);
        let { chartData } = this.props;
        let minimumTemp = [];
        for(let i=0; i<chartData.length-1; i++){
            let currentDay = chartData[i];
            let minTemp = currentDay.temp.min;
            minimumTemp.push(minTemp);
        }
        let maximumTemp = [];
        for(let i=0; i<chartData.length-1; i++){
            let currentDay = chartData[i];
            let maxTemp = currentDay.temp.max;
            maximumTemp.push(maxTemp);
        }
        let weekDate = [];
        for(let i=0; i<chartData.length-1; i++){
            weekDate.push(`${Date_Today} ${Month}`);
            Date_Today++;
        }

        return(

            <Container>
                <Line
                    data = {{
                        labels: weekDate,
                        datasets: [
                            {
                                label: 'Max Temp',
                                data: maximumTemp,
                                backgroundColor: '#E3242B',
                                fill: false,
                                borderColor: '#E3242B'
                            },

                            {
                                label: 'Min Temp',
                                data: minimumTemp,
                                backgroundColor: '#2F66A9',
                                fill: false,
                                borderColor: '#2F66A9'
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
                                    text: "This Week",
                                    display: true,
                                }
                            },

                            y: {
                                display: true,
                                title: {
                                    text: "Temperature in °C",
                                    display: true,
                                }
                            }
                        }
                    }}
                    // width ={600}
                    // height = {400}
                />
            </Container>
        );
    }
}

export default Graph;

const Container=styled.div`
    width: 500px;
    height:400px;
    @media screen and (max-width: 550px)
    {
        height: 600px;
        width: 400px;
    }

`