import { Pipe, PipeTransform } from '@angular/core';
import { PermissionServ } from '../../services';

@Pipe({
  name: 'hasPermission',
  pure: false
})
export class HasPermissionPipe implements PipeTransform {
  constructor(private permissionServ: PermissionServ) {}

  transform(path: string): boolean {
    return this.permissionServ.hasRoutePath(path);
  }
}
