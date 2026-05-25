import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ReviewFormComponent } from './review-form.component';
import { CommonModule } from '@angular/common';

describe('ReviewFormComponent', () => {
  let component: ReviewFormComponent;
  let fixture: ComponentFixture<ReviewFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReviewFormComponent],
      imports: [CommonModule, ReactiveFormsModule, FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ReviewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have form with decision and comment controls', () => {
    expect(component.form.get('decision')).toBeTruthy();
    expect(component.form.get('comment')).toBeTruthy();
  });

  it('should be invalid when form is empty', () => {
    expect(component.form.invalid).toBe(true);
  });

  it('should be valid when form is filled', () => {
    component.form.patchValue({
      decision: 'approved',
      comment: 'Test comment',
    });
    expect(component.form.valid).toBe(true);
  });

  it('should emit submit event on valid form submission', (done) => {
    const submitSpy = jest.spyOn(component.submit, 'emit');
    component.form.patchValue({
      decision: 'approved',
      comment: 'Test comment',
    });
    component.onSubmit();

    setTimeout(() => {
      expect(submitSpy).toHaveBeenCalledWith({
        decision: 'approved',
        comment: 'Test comment',
      });
      done();
    }, 600);
  });

  it('should not emit submit event on invalid form submission', () => {
    const submitSpy = jest.spyOn(component.submit, 'emit');
    component.onSubmit();
    expect(submitSpy).not.toHaveBeenCalled();
  });

  it('should set isSubmitting flag during submission', (done) => {
    component.form.patchValue({
      decision: 'rework',
      comment: 'Needs changes',
    });
    component.onSubmit();
    expect(component.isSubmitting).toBe(true);

    setTimeout(() => {
      expect(component.isSubmitting).toBe(false);
      done();
    }, 600);
  });
});
