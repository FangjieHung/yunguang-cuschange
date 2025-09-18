/* eslint-disable @typescript-eslint/no-explicit-any */
import { BuildCompBundleDtl } from '../entities';

export class BuildCompBundleDtlDto extends BuildCompBundleDtl {
  buildCompName?: string | null = null;
  buildCompType?: string | null = null;
  thumbnailAttId = 0;
  
  constructor() {
    super();
  }
}
