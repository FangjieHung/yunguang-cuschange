export interface BuildProjRenderView {
  id: number;
  buildProjVolumeId: number;
  buildStyle: string;
  wallMat: string;
  appFileAttId: number;
  imgBase64: string | null;
  result: string | null;
  crtAt: Date;
}
