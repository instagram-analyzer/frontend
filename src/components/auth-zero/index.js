import auth0 from "auth0-js";
import axios from "axios";
import jwtDecode from "jwt-decode";

const history = require("history").createBrowserHistory();

class Auth {
  accessToken;
  idToken;
  expiresAt;
  userProfile;
  tokenRenewalTimeout;

  //-------------------- Auth Config --------------------
  auth0 = new auth0.WebAuth({
    domain: process.env.REACT_APP_AUTH0_DOMAIN,
    clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
    redirectUri: process.env.REACT_APP_AUTH0_CALLBACK_URL,
    responseType: "token id_token",
    scope: "openid profile email offline_access",
    sso: false
  });

  //-------------------- handle login built in function from Auth0 --------------------
  login = () => {
    this.auth0.authorize();
  };

  // -------------------- once user is authenticated with login we will invoke setSession --------------------
  handleAuthentication = () => {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
      } else if (err) {
        history.replace("/");
      }
    });
  };

  //get access token
  getAccessToken = () => {
    return this.accessToken;
  };

  // get user token
  getIdToken = () => {
    return this.idToken;
  };

  // once user is authenticated we will make a request to lad backend and create this user to our backend if it does not exists
  setSession = authResult => {
    //-------------------- Set the time that the access token will expire at --------------------
    let expiresAt = authResult.expiresIn * 1000 + new Date().getTime();
    this.accessToken = authResult.accessToken;
    this.idToken = authResult.idToken;
    this.expiresAt = expiresAt;
    // Set isLoggedIn flag in localStorage
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("access_token", authResult.accessToken);
    localStorage.setItem("id_token", authResult.idToken);
    localStorage.setItem("expires_at", expiresAt);
    //-------------------- schedule a token renewal --------------------
    const decoded = jwtDecode(localStorage.id_token && localStorage.id_token);

    const user = {
      name: decoded.name,
      email: decoded.email,
      image_url: decoded.picture,
      nickname: decoded.nickname,
      sub: decoded.sub
    };

    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.id_token}`
      }
    };

    axios
      .post(
        `https://social-analyzer2.herokuapp.com/api/auth/register`,
        user,
        config
      )
      .then(res => (window.location.href = "/dashboard/instagram"))
      .catch(err => {});
  };

  logout = async () => {
    // Remove tokens and expiry time
    this.accessToken = null;
    this.idToken = null;
    localStorage.clear();
    sessionStorage.clear();
    history.replace("/");
  };
}

export default Auth;
