export const authEndpoint = "https://accounts.spotify.com/authorize"; //need to authenticate using spotify
//const redirectUri = "https://localhost:3000"; //web api setting
const redirectUri = "https://spotify-clone.web.app/"
const clientId = "e2f3e942ec314d8ea03adb502b911b6a"; //provided by spotify
//permisions
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
    .reduce((initial, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`; //Url for authorized user
