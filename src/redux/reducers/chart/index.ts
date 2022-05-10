import { GET_OVERVIEW, GET_CAMPAIGNS, SET_LOADING } from 'redux/types';
import { ActionType } from 'utils/Type';
const initialState = {
  chartList: {},
  campaignsList: [],
  loading: false,
};

export default function (state = initialState, action: ActionType) {
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
