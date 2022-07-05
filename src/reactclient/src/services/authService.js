import { UserManager } from "oidc-client";

export class AuthService {
  userManager;
  constructor() {
    const settings = {
      authority: "https://localhost:5001",
      client_id: "react",
      redirect_uri: window.location.origin,
      post_logout_redirect_uri: window.location.origin,
      response_type: "code",
      client_secret: "secret",
      response_mode: "query",
      scope: "openid profile ",
      sercet: "secret",
    };

    this.userManager = new UserManager(settings);

    // Log.logger = console;
    // Log.level = Log.INFO;
  }

  getUser() {
    return this.userManager.getUser();
  }

  login() {
    return this.userManager.signinRedirect();
  }

  renewToken() {
    return this.userManager.signinSilent();
  }

  logout() {
    return this.userManager.signoutRedirect();
  }
}
