import { Component, Injector, Input, OnInit } from '@angular/core';
import { BBDBaseComponent } from '../bbd-base.component';

@Component({
  selector: 'bbd-quill-editor-viewer',
  templateUrl: './bbd-quill-editor-viewer.component.html',
  styleUrls: ['./bbd-quill-editor-viewer.component.scss']
})

export class BBDQuillEditorViewerComponent extends BBDBaseComponent implements OnInit {
  @Input() content = '';
  constructor(
    protected override injector: Injector,) {
    super(injector);
  }

  ngOnInit(): void {
    console.log();
  }
}
