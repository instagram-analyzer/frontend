import React from 'react';
import {
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip,
  ResponsiveContainer
} from 'recharts';

import { GraphContainer, MainContainer } from '../graphStyles.js';

export class AreaGraph extends React.Component {
    gradientOffset = () => {
        const dataMax = Math.max(...this.props.data.map(i => i[this.props.datakey]));
        const dataMin = Math.min(...this.props.data.map(i => i[this.props.datakey]));
      
        if (dataMax <= 0) {
          return 0;
        }
        if (dataMin >= 0) {
          return 1;
        }
      
        return dataMax / (dataMax - dataMin);
    }

    off = this.gradientOffset();

    render() {
        const { datakey, data } = this.props;
        return (
        <GraphContainer>
            <MainContainer>
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                        data={data}
                        margin={{
                        top: 10, right: 30, left: 0, bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <defs>
                        <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
                            <stop offset={this.off} stopColor="green" stopOpacity={1} />
                            <stop offset={this.off} stopColor="red" stopOpacity={1} />
                        </linearGradient>
                        </defs>
                        <Area type="monotone" dataKey={datakey} stroke="#000" fill="url(#splitColor)" />
                    </AreaChart>
                </ResponsiveContainer>
            </MainContainer>
        </GraphContainer>
        );
    }
}

export default AreaGraph;