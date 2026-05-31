"use client"

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
    ArcElement
} from "chart.js"

import { Line, Doughnut } from "react-chartjs-2"

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
    ArcElement
)

const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],

    datasets: [
        {
            label: "Revenue",
            data: [1200, 1900, 3000, 5000, 4200, 6200],
            borderColor: "#3b82f6",
            backgroundColor: "rgba(59,130,246,0.2)",
            tension: 0.4,
        },
    ],
}

const options = {
    responsive: true,

    plugins: {
        legend: {
            position: "top" as const,
        },
    },
}

export default function RevenueChart() {
    return <Doughnut data={data} options={options} />
}