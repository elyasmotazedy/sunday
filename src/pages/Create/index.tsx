import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ADD_CAMPAIGNS } from 'redux/types';
import { v4 as uuidv4 } from 'uuid';
import { Grid, Container } from '@mui/material';
import style from './style.module.css';
const Create = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    //set new data for our custom campaign
    const newData = {
      id: uuidv4(),
      name: value,
      installs: [
        { day: 'monday', value: Math.floor(Math.random() * 101) },
        { day: 'tuesday', value: Math.floor(Math.random() * 101) },
        { day: 'wednesday', value: Math.floor(Math.random() * 101) },
        { day: 'thursday', value: Math.floor(Math.random() * 101) },
        { day: 'friday', value: Math.floor(Math.random() * 101) },
        { day: 'saturday', value: Math.floor(Math.random() * 101) },
        { day: 'sunday', value: Math.floor(Math.random() * 101) },
      ],
    };
    dispatch({
      type: ADD_CAMPAIGNS,
      payload: newData,
    });
    //empty the input
    setValue('');
  };
  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <div>
            <form onSubmit={handleSubmit}>
              <label className={style.label}>
                <b> Name</b>
                <input
                  type="text"
                  value={value}
                  onChange={handleChange}
                  placeholder="Enter campaign name"
                  className={style.input}
                  autoFocus
                />
              </label>
              <input className={style.button} type="submit" value="Submit" />
            </form>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Create;
