import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KpiCardComponent } from './kpi-card.component';
import { MatIconModule } from '@angular/material/icon';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('KpiCardComponent', () => {
  let component: KpiCardComponent;
  let fixture: ComponentFixture<KpiCardComponent>;
  let compiled: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KpiCardComponent],
      imports: [MatIconModule],
    }).compileComponents();

    fixture = TestBed.createComponent(KpiCardComponent);
    component = fixture.componentInstance;
    compiled = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display label and value', () => {
    component.label = 'Test Label';
    component.value = 42;
    fixture.detectChanges();

    const labelElement = compiled.query(By.css('.kpi-card__label'));
    const valueElement = compiled.query(By.css('.kpi-card__value'));

    expect(labelElement.nativeElement.textContent).toContain('Test Label');
    expect(valueElement.nativeElement.textContent).toContain('42');
  });

  it('should apply variant class', () => {
    component.variant = 'success';
    fixture.detectChanges();

    const element = compiled.query(By.css('.kpi-card'));
    expect(element.nativeElement.classList.contains('kpi-card--success')).toBeTruthy();
  });

  it('should display subtext when provided', () => {
    component.subtext = 'Test Subtext';
    fixture.detectChanges();

    const subtextElement = compiled.query(By.css('.kpi-card__subtext'));
    expect(subtextElement).toBeTruthy();
    expect(subtextElement.nativeElement.textContent).toContain('Test Subtext');
  });

  it('should not display subtext when not provided', () => {
    component.subtext = undefined;
    fixture.detectChanges();

    const subtextElement = compiled.query(By.css('.kpi-card__subtext'));
    expect(subtextElement).toBeFalsy();
  });

  it('should apply all variant classes correctly', () => {
    const variants: Array<'default' | 'warning' | 'success' | 'danger' | 'info'> = [
      'default',
      'warning',
      'success',
      'danger',
      'info',
    ];

    variants.forEach((variant) => {
      component.variant = variant;
      fixture.detectChanges();

      const element = compiled.query(By.css('.kpi-card'));
      if (variant !== 'default') {
        expect(element.nativeElement.classList.contains(`kpi-card--${variant}`)).toBeTruthy();
      }
    });
  });

  it('should display custom icon', () => {
    component.icon = 'check_circle';
    fixture.detectChanges();

    const iconElement = compiled.query(By.css('.kpi-card__icon mat-icon'));
    expect(iconElement).toBeTruthy();
    expect(iconElement.nativeElement.textContent).toContain('check_circle');
  });

  it('should handle string and number values', () => {
    // Test with number
    component.value = 123;
    fixture.detectChanges();
    let valueElement = compiled.query(By.css('.kpi-card__value'));
    expect(valueElement.nativeElement.textContent).toContain('123');

    // Test with string
    component.value = '+NT$ 1,000';
    fixture.detectChanges();
    valueElement = compiled.query(By.css('.kpi-card__value'));
    expect(valueElement.nativeElement.textContent).toContain('+NT$ 1,000');
  });
});
