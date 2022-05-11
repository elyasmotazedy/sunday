import {
  GET_OVERVIEW,
  GET_CAMPAIGNS,
  SET_LOADING,
  ADD_CAMPAIGNS,
} from 'redux/types';
import { ActionType } from 'utils/Type';
const initialState = {
  chartList: {},
  campaignsList: [],
  addedCampaigns: [],
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
    case ADD_CAMPAIGNS:
      return {
        ...state,
        addedCampaigns: [...state.addedCampaigns, payload],
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
