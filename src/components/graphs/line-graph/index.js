import React from 'react';
import {
  LineChart, 
  Line,
  XAxis, 
  YAxis, 
  Tooltip, 
  Legend,
  ResponsiveContainer
} from 'recharts';

import { GraphContainer, MainContainer } from '../graphStyles.js';

export default class LineGraph extends React.Component {
  render() {
    const { data, datakey } = this.props;
    return (
      <GraphContainer>
        <MainContainer>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
                data={data}
                margin={{
                top: 5, right: 30, left: 20, bottom: 5,
                }}
            >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey={datakey} stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </MainContainer>
    </GraphContainer>
    );
  }
}