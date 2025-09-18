/* eslint-disable @typescript-eslint/no-explicit-any */
import { BuildProjVolume } from '../entities';
import { BuildProjRenderDto } from './';

export class BuildProjVolumeDto extends BuildProjVolume {
  fileIndex: number | null = null;
  renders?: BuildProjRenderDto[] | null;

  constructor() {
    super();
  }
}
