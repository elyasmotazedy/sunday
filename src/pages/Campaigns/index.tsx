import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCampaigns } from 'redux/actions/chart';
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
type Campaigns = {
  id: string;
  name: string;
  installs: ChartList[];
};
interface Props {
  campaignsList: Campaigns[];
  getCampaigns: () => void;
}

const Campaigns = ({ getCampaigns, campaignsList }: Props) => {
  const [dropDownList, setDropDownList] = useState<string[]>([]);
  const [list, setList] = useState<Campaigns[]>([]);

  const [value, setValue] = useState('');
  const [selectedChart, setSelectedChart] = useState<Campaigns>();

  useEffect(() => {
    getCampaigns();
  }, []);

  useEffect(() => {
    if (campaignsList.length > 0) {
      setList(campaignsList);
      const newList: string[] = campaignsList.map((item) => {
        return item.name;
      });
      setValue(newList[0]);
      setDropDownList(newList);
    }
  }, [campaignsList]);

  useEffect(() => {
    const selected = list.find((item) => item.name === value);
    setSelectedChart(selected);
  }, [value]);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(event.target.value);
  };

  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <label style={{ marginTop: '30px', display: 'block' }}>
            <select value={value} onChange={handleChange}>
              {dropDownList.length > 0 &&
                dropDownList.map((element) => (
                  <option key={element} value={element}>
                    {element}
                  </option>
                ))}
            </select>
          </label>
          <h3 className={style.chartTitle}>installs</h3>
        </Grid>
        <Grid item xs={6}>
          {selectedChart && (
            <ResponsiveContainer width="100%" aspect={2}>
              <LineChart width={500} height={300} data={selectedChart.installs}>
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

Campaigns.prototype = {
  getCampaigns: PropTypes.func.isRequired,
  campaignsList: PropTypes.object.isRequired,
};
const mapStateToProps = (state: any) => ({
  campaignsList: state.chart.campaignsList,
});

export default connect(mapStateToProps, { getCampaigns })(Campaigns);
