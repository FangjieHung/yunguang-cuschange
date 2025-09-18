export interface BuildProjDocView {
  id: number;
  buildProjectId: number;
  fileName: string;
  docId: string | null;
  docConfidence: number;
  analyseResAt: Date | null;
  crtAt: Date;
}
