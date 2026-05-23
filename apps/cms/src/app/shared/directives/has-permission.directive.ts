import {
  Directive,
  Input,
  TemplateRef,
  ViewContainerRef,
  OnInit,
} from '@angular/core';
import { CmsStore } from '../../core/state';

@Directive({
  selector: '[cmsHasPermission]',
  standalone: true,
})
export class HasPermissionDirective implements OnInit {
  @Input() set cmsHasPermission(requiredRoles: string[]) {
    this.requiredRoles = requiredRoles;
    this.updateView();
  }

  private requiredRoles: string[] = [];

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private store: CmsStore
  ) {}

  ngOnInit() {
    this.updateView();
  }

  private updateView() {
    const currentRole = this.store.currentRole();

    if (currentRole && this.requiredRoles.includes(currentRole)) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
