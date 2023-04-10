import React from 'react';
import './statistics.css'
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip
  } from "recharts";
const Statistics = () => {
    const assignment_dashboard=[
        {
            Assignment_No : "Assignment 1",
            Mark:60
        },
        {
            Assignment_No : "Assignment 2",
            Mark:57
        },
        {
            Assignment_No : "Assignment 3",
            Mark:58
        },
        {
            Assignment_No : "Assignment 4",
            Mark:51
        },
        {
            Assignment_No : "Assignment 5",
            Mark:50
        },
        {
            Assignment_No : "Assignment 6",
            Mark:49
        },
        {
            Assignment_No : "Assignment 7",
            Mark:60
        },
        {
            Assignment_No : "Assignment 8",
            Mark:35
        }
    ];
    return (
        <div className='dashboard'>
            <h2>AreaChart of My Assignment Marks</h2>
           <AreaChart
           width={1000}
           height={300}
           data={assignment_dashboard}
           >
            <Area type="monotone" dataKey="Mark" stroke="#8884d8" fill="#8884d8" />
            <XAxis dataKey="Assignment_No" />
            <YAxis></YAxis>
            <Tooltip></Tooltip>
           </AreaChart>
        </div>
    );
};

export default Statistics;