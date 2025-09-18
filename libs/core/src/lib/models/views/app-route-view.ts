export interface AppRouteView {
  id: number;
  parentId: number;
  appPfm: string;
  name: string;
  icon: string | null;
  path: string | null;
  startAt: Date;
  endAt: Date;
  sort: number;
}
