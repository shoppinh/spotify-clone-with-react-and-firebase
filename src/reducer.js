export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //Remove after finish the projects
  token:
    "BQAsrPo8OZyQ3vWkkhbai-lc5Ckzu3WLk0096pXWcA_eNia_UwC45qi4bJzVcojPwUC-jSoshLHb5TGmRDOb_LvIvAPKNWi3_3-Q7TDAmlNmrw_Y_pOFW0Bs4JDiQlTHPHkwBTKFtfF2nrA-T-oTbBTVP4x7hTuY_x4Z8n23ApbfdKo",
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
    default:
      return state;
  }
};
export default reducer;
