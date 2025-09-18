export interface BuildComponentView {
  id: number;
  corpId: number;
  corpName?: string | null;
  name: string;
  compType: string;
  compFileAttId: number;
  compFileUploadName?: string | null;
  thumbnailAttId: number;
  content?: string | null;
}
