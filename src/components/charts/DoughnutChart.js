import React from 'react';

import { Doughnut } from 'react-chartjs-2';


export default function DoughnutChart(props) {

    const data = {
        labels: [
            props.label1,
            props.label2,
        ],
        datasets: [{
            data: [props.value1, props.value2],
            backgroundColor: [
                'rgba(54, 162, 235, 0.4)',
                'rgba(255,99,132, 0.4)'
            ],
            hoverBackgroundColor: [
                'rgba(54, 162, 235, 0.7)',
                'rgba(255,99,132, 0.7)'
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(255,99,132, 1)'
            ],
        }]
    };

    return (
        <div>
            <h2>{props.title}</h2>
            <Doughnut data={data} />
        </div>
    );
}