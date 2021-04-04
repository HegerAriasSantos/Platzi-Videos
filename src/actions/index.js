export const actions = {
  setFavorite: "SET_FAVORITE",
  deleteFavorite: "DELETE_FAVORITE",
  login_request: "LOGIN_REQUEST",
  logout_request: "LOGOUT_REQUEST",
  getVideoSource: "GET_VIDEO_SOURCE",
};

export const setFavorite = (payload) => ({
  type: actions.setFavorite,
  payload,
});

export const deleteFavorite = (payload) => ({
  type: actions.deleteFavorite,
  payload,
});

export const login_request = (payload) => ({
  type: actions.login_request,
  payload,
});

export const logout_request = (payload) => ({
  type: actions.logout_request,
  payload,
});

export const getVideoSource = (payload) => ({
  type: actions.getVideoSource,
  payload,
});
