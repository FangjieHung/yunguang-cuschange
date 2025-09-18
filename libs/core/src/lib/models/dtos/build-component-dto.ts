/* eslint-disable @typescript-eslint/no-explicit-any */
import { BuildComponent } from '../entities';

export class BuildComponentDto extends BuildComponent {
  corpName?: string | null = null;
  compFileUploadName?: string | null = null;
  compFileIndex: number | null = null;
  thumbFileIndex: number | null = null;

  constructor() {
    super();
  }
}
