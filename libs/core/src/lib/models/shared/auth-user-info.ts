import { AuthUserRoute } from "./auth-user-route";

export class AuthUserInfo {
  appPfm = '';
  appUserId = 0;
  adminId = 0;
  custId = 0;
  account = '';
  passwordExpAt: Date | null = null;
  avatarAttId: number | null = null;
  name = '';
  status = 0;
  authUserRoutes: AuthUserRoute[] | null = null;
}
