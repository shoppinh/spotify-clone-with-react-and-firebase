export const initialState = {
  user: null,
  playlists: [],
  shazam: null,
  playing: false,
  item: null,
  //Remove after finish the projects
  //token: "BQDQNuc39B4xc3hVEFAZ7OIQKUWSmAWQB5GRG_YgsG7Stq2JU0sT0CAqi3-Pp7hy26ZEbyL0lrXalnadCLU2PRwLl8Z7mM-mNLMgY8uDgk7RUhu38QaLUlfTkCmqvos13R1zBgGIL8Uo5FVszUGCz1AwRPcnwgoqOZxU43b8vCJ39vb3",
  token: null,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_SHAZAM":
      return {
        ...state,
        shazam: action.shazam,
      }
    default:
      return state;
  }
};
export default reducer;
