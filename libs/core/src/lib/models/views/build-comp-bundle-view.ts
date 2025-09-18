import { BuildCompBundleDtlView } from './build-comp-bundle-dtl-view';
export interface BuildCompBundleView {
  id: number;
  corpId: number;
  corpName?: string | null;
  name: string;
  content?: string | null;
  details?: BuildCompBundleDtlView[] | null;
}
