import { BuildProjRenderView } from './build-proj-render-view';

export interface BuildProjVolumeView {
  id: number;
  buildProjectId: number;
  coverAttId: number;
  resultAttId: number;
  floorNum: number;
  scoreParking: number;
  scoreStructure: number;
  scoreUnitMix: number;
  param: string | null;
  result: string | null;
  crtAt: Date;
  renders?: BuildProjRenderView[] | null;
}
