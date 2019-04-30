import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, Legend,
} from 'recharts';

import { GraphContainer } from '../graphStyles.js';

export default class LineGraph extends React.Component {
  render() {
    return (
    <GraphContainer>
        <LineChart
            width={1500}
            height={300}
            data={this.props.data}
            margin={{
            top: 5, right: 30, left: 20, bottom: 5,
            }}
        >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
    </GraphContainer>
    );
  }
}