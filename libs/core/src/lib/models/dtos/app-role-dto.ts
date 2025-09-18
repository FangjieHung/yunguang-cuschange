/* eslint-disable @typescript-eslint/no-explicit-any */
import { AppRole } from '../entities';
import { AppRoleRouteDto } from './';

export class AppRoleDto extends AppRole {
  roleRouteDtos?: AppRoleRouteDto[] | null;

  constructor() {
    super();
  }
}
