import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getOverview } from 'redux/actions/chart';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

import style from './style.module.css';

type ChartList = { day: string; value: number }[];
interface Props {
  chartList: {
    installs: ChartList;
    revenue: ChartList;
  };
  getOverview: () => void;
}

function Overview({ getOverview, chartList }: Props) {
  useEffect(() => {
    getOverview();
  }, []);

  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <h3 className={style.chartTitle}>installs</h3>
          {chartList && (
            <ResponsiveContainer width="100%" aspect={2}>
              <LineChart width={500} height={300} data={chartList.installs}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Legend />

                <Line type="monotone" dataKey="value" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          )}
        </Grid>
        <Grid item xs={12} md={6}>
          <h3 className={style.chartTitle}>revenue</h3>
          {chartList && (
            <ResponsiveContainer width="100%" aspect={2}>
              <LineChart width={500} height={300} data={chartList.revenue}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Legend />

                <Line type="monotone" dataKey="value" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          )}
        </Grid>
      </Grid>
    </Container>
  );
}

Overview.prototype = {
  getOverview: PropTypes.func.isRequired,
  chartList: PropTypes.object.isRequired,
};
const mapStateToProps = (state: any) => ({
  chartList: state.chart.chartList,
});

export default connect(mapStateToProps, { getOverview })(Overview);
