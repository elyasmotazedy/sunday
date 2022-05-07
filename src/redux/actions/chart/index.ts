import axiosReq from 'utils/axiosConfig';
import { GET_OVERVIEW, SET_LOADING } from 'redux/types';

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
    // if (err.response && err.response.status === 404) {
    //   if (err.response.data.errors) {
    //     dispatch({
    //       type: GET_PROFILE_FAIL,
    //       payload: { body: err.response.data.errors, code: 404 },
    //     });
    //   }
    //   if (err.response && err.response.data.message) {
    //     dispatch({
    //       type: GET_PROFILE_FAIL,
    //       payload: { body: err.response.data.message, code: 404 },
    //     });
    //   }
    // } else {
    //   dispatch({
    //     type: GET_PROFILE_FAIL,
    //     payload: { body: 'Somthing went wrong', code: 500 },
    //   });
    // }

    dispatch({
      type: SET_LOADING,
      payload: false,
    });
  }
};
