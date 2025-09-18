import { AppRoleRouteView } from './app-role-route-view';

export interface AppRoleView {
  id: number;
  appPfm: string;
  name: string;
  status: number;
  roleRouteViews?: AppRoleRouteView[] | null;
}
