import axiosReq from 'utils/axiosConfig';
import { GET_OVERVIEW, GET_CAMPAIGNS, SET_LOADING } from 'redux/types';

export const getOverview = () => async (dispatch: any) => {
  try {
    dispatch({
      type: SET_LOADING,
      payload: true,
    });

    const res = await axiosReq.get(`/overview`);

    if (res.status === 200) {
      dispatch({
        type: GET_OVERVIEW,
        payload: res.data,
      });
    }

    dispatch({
      type: SET_LOADING,
      payload: false,
    });
  } catch (err: any) {
    dispatch({
      type: SET_LOADING,
      payload: false,
    });
  }
};
export const getCampaigns = () => async (dispatch: any) => {
  try {
    dispatch({
      type: SET_LOADING,
      payload: true,
    });

    const res = await axiosReq.get(`/campaigns`);

    if (res.status === 200) {
      dispatch({
        type: GET_CAMPAIGNS,
        payload: res.data,
      });
    }

    dispatch({
      type: SET_LOADING,
      payload: false,
    });
  } catch (err: any) {
    dispatch({
      type: SET_LOADING,
      payload: false,
    });
  }
};
