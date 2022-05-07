import { GET_OVERVIEW, GET_CAMPAIGNS, SET_LOADING } from 'redux/types';
const initialState = {
  chartList: {},
  campaignsList: [],
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
    case GET_CAMPAIGNS:
      return {
        ...state,
        campaignsList: payload,
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
