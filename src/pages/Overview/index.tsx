import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getOverview } from 'redux/actions/chart';
import { Grid, Container } from '@mui/material';
import Loading from 'utils/Loading';
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
import { ChartList } from 'utils/Type';

interface Props {
  chartList: {
    installs: ChartList[];
    revenue: ChartList[];
  };
  getOverview: () => void;
  loading: boolean;
}

const Overview = ({ getOverview, loading, chartList }: Props) => {
  useEffect(() => {
    getOverview();
  }, []);

  return loading ? (
    <Loading />
  ) : (
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
};

Overview.prototype = {
  getOverview: PropTypes.func.isRequired,
  chartList: PropTypes.object.isRequired,
  loading: PropTypes.bool,
};
const mapStateToProps = (state: any) => ({
  chartList: state.chart.chartList,
  loading: state.chart.loading,
});

export default connect(mapStateToProps, { getOverview })(Overview);
