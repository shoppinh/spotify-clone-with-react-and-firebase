export const authEndPoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";
const clientID = "f0217debc54648e49bcd5bf4f1d5a4f8";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];
export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((accumulate, item) => {
      let part = item.split("=");
      accumulate[part[0]] = decodeURIComponent(part[1]);
      return accumulate;
    }, {});
};
export const loginUrl = `${authEndPoint}?client_id=${clientID}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
