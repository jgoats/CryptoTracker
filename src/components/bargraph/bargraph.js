import React, { Component } from 'react';
import "./bargraph.scss";

import { Bar } from "react-chartjs-2";
import moment from "moment";

const labels = [];
for (let i = 1; i <= 24; i++) {
    labels.push(i);
}
const data = canvas => {
    const ctx = canvas.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, 100, 0);
    return {
        backgroundColor: gradient,
        labels,
        datasets: [
            {
                data: [36004, 70000, 56000, 54000, 60000, 65000, 50000,
                    36004, 70000, 56000, 54000, 60000, 65000, 50000,
                    36004, 70000, 56000, 54000, 60000, 65000, 50000, 40000, 56000, 78000],
                borderWidth: 3,
                fill: true,
                borderColor: "rgb(85,36,125)",
                backgroundColor: "rgba(85,36,125,0.1)",
            }
        ]
    };
};
export default class BarGraph extends React.Component {
    render() {
        return (
            <div className="line-graph">
                <Bar options={{
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { display: false },
                        tooltip: false
                    }
                }} data={data} />
            </div>
        );
    }
}
