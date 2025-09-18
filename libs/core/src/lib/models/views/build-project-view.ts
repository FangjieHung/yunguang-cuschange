import { BuildProjDocView } from './build-proj-doc-view';
import { BuildProjVolumeView } from './build-proj-volume-view';

export interface BuildProjectView {
  id: number;
  corpId: number;
  corpName?: string | null;
  name: string;
  addr: string;
  buildCompBundleId: number;
  coverAttId: number;
  baseMapAttId: number;
  baseArea: number;
  baseCoord: string | null;
  volParam: string | null;
  content?: string | null;
  docs?: BuildProjDocView[] | null;
  volumes?: BuildProjVolumeView[] | null;
}
