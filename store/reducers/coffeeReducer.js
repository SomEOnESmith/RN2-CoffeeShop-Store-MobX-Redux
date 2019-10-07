import { GET_COFFEESHOPS, COFFEESHOPS_LOADING } from "../actions/types";

const initialState = {
  coffeeShops: [],
  loading: true
};

export default (state = initialState, actions) => {
  switch (actions.type) {
    case GET_COFFEESHOPS:
      const cS = actions.payload;
      return {
        ...state,
        coffeeShops: cS,
        loading: false
      };

    case COFFEESHOPS_LOADING:
      return {
        ...state,
        loading: true
      };

    default:
      return state;
  }
};
