/* eslint-disable @typescript-eslint/no-explicit-any */
import { BuildProject } from '../entities';
import { BuildProjDocDto, BuildProjVolumeDto } from './';

export class BuildProjectDto extends BuildProject {
  corpName?: string | null = null;
  docs?: BuildProjDocDto[] | null = null;
  volumes?: BuildProjVolumeDto[] | null = null;

  constructor() {
    super();
  }
}
