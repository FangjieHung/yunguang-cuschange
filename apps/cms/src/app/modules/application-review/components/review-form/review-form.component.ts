import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'cms-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.scss'],
})
export class ReviewFormComponent {
  @Output() submit = new EventEmitter<{ decision: string; comment: string }>();

  form: FormGroup;
  isSubmitting = false;

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      decision: ['', [Validators.required]],
      comment: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.form.invalid) return;

    this.isSubmitting = true;
    const { decision, comment } = this.form.value;

    setTimeout(() => {
      this.submit.emit({ decision, comment });
      this.isSubmitting = false;
    }, 500);
  }
}
