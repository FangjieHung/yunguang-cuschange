/* eslint-disable @typescript-eslint/no-explicit-any */
import { BuildCompBundle } from '../entities';
import { BuildCompBundleDtlDto } from './';

export class BuildCompBundleDto extends BuildCompBundle {
  corpName?: string | null = null;
  details?: BuildCompBundleDtlDto[] | null;

  constructor() {
    super();
  }
}
