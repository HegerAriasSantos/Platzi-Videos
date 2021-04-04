import { actions } from "../actions";

export default (state, action) => {
  switch (action.type) {
    case actions.setFavorite:
      const result = state.myList.filter(
        (item) => item.id === action.payload.id
      );
      return result.length > 0
        ? state
        : {
            ...state,
            myList: [...state.myList, action.payload],
          };

    case actions.deleteFavorite:
      return {
        ...state,
        myList: state.myList.filter((item) => item.id !== action.payload),
      };

    case actions.login_request:
    case actions.logout_request:
      return {
        ...state,
        user: action.payload,
      };
    case actions.getVideoSource:
      return {
        ...state,
        playing:
          state.trends.find((item) => item.id === Number(action.payload)) ||
          state.originals.find((item) => item.id === Number(action.payload)) ||
          [],
      };

    default:
      return state;
  }
};
