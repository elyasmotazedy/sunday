import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCampaigns } from 'redux/actions/chart';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
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

type Campaigns = {
  id: string;
  name: string;
  installs: ChartList[];
};
interface Props {
  campaignsList: Campaigns[];
  addedCampaigns: Campaigns[];
  getCampaigns: () => void;
  loading: boolean;
}

const Campaigns = ({
  getCampaigns,
  loading,
  campaignsList,
  addedCampaigns,
}: Props) => {
  const [dropDownList, setDropDownList] = useState<string[]>([]);
  const [list, setList] = useState<Campaigns[]>([]);

  const [value, setValue] = useState('');
  const [selectedChart, setSelectedChart] = useState<Campaigns>();

  useEffect(() => {
    getCampaigns();
  }, []);

  useEffect(() => {
    if (campaignsList.length > 0) {
      //add our custom campaigns to the list
      campaignsList = [...campaignsList, ...addedCampaigns];
      //set List for search when campaign changed
      setList(campaignsList);

      // get te name in each campaign for select list
      const newList: string[] = campaignsList.map((item) => {
        return item.name;
      });
      //set list for loop select list
      setDropDownList(newList);
      // initial for first look
      setValue(newList[0]);
    }
  }, [campaignsList]);

  useEffect(() => {
    //find the choosen campaign
    const selected = list.find((item) => item.name === value);
    setSelectedChart(selected);
  }, [value]);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(event.target.value);
  };

  return loading ? (
    <Loading />
  ) : (
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
  campaignsList: PropTypes.array.isRequired,
  addedCampaigns: PropTypes.array,
  loading: PropTypes.bool,
};
const mapStateToProps = (state: any) => ({
  campaignsList: state.chart.campaignsList,
  addedCampaigns: state.chart.addedCampaigns,
  loading: state.chart.loading,
});

export default connect(mapStateToProps, { getCampaigns })(Campaigns);
