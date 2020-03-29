import React from 'react';
import { Bar } from 'react-chartjs-2';


export default function BarChart(props) {
    const data = {
        labels: props.labels,
        datasets: [{
            data: props.values,
            backgroundColor: [
                'rgba(54, 162, 235, 0.4)',
                'rgba(255,99,132, 0.4)',
                'rgba(93, 75, 116, 0.4)',
                'rgb(242, 160, 11, 0.4)',
                'rgba(158, 205, 94, 0.4)'
            ],
            hoverBackgroundColor: [
                'rgba(54, 162, 235, 0.7)',
                'rgba(255,99,132, 0.7)',
                'rgba(93, 75, 116, 0.7)',
                'rgb(242, 160, 11, 0.7)',
                'rgba(158, 205, 94, 0.7)'
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(255,99,132, 1)',
                'rgba(93, 75, 116, 1)',
                'rgb(242, 160, 11, 1)',
                'rgba(158, 205, 94, 1)'
            ],
        }]
    };

    const options = {
        legend: {
            display: false
        },
        scales: {
            xAxes: [{
                display: false
            }]
        },
        
    }

    return (
        <div>
            <h2>{props.title}</h2>
            <Bar data={data} options={options} />
        </div>
    );
}