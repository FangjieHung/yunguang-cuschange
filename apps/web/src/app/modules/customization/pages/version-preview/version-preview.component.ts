import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomizationVersion, VersionService } from '../../services/version.service';

@Component({
  selector: 'app-version-preview',
  templateUrl: './version-preview.component.html',
  styleUrls: ['./version-preview.component.scss'],
})
export class VersionPreviewComponent implements OnInit {
  version: CustomizationVersion | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private versionService: VersionService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') || '';
    this.version = this.versionService.getById(id) || null;
  }

  back(): void {
    this.router.navigate(['/customization/my-list']);
  }

  choose(): void {
    if (!this.version) return;
    this.versionService.setSelected(this.version.id);
    this.router.navigate(['/customization/submit']);
  }
}
