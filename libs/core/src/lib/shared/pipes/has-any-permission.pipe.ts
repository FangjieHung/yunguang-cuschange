import { Pipe, PipeTransform } from '@angular/core';
import { PermissionServ } from '../../services';

@Pipe({
    name: 'hasAnyPermission',
    pure: false, // 因為資料來自 service，為了讓變動時能觸發更新
})
export class HasAnyPermissionPipe implements PipeTransform {
    constructor(private permissionServ: PermissionServ) { }

    transform(paths: string[]): boolean {
        return paths?.some(path => this.permissionServ.hasRoutePath(path));
    }
}
