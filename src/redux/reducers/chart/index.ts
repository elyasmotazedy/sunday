import { GET_OVERVIEW, SET_LOADING } from 'redux/types';
const initialState = {
  chartList: {},
  loading: false,
};

export default function (state = initialState, action: any) {
  const { type, payload } = action;
  switch (type) {
    case GET_OVERVIEW:
      return {
        ...state,
        chartList: payload,
      };

    case SET_LOADING:
      return {
        ...state,
        loading: payload,
      };

    default:
      return state;
  }
}
