import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maskId',
  standalone: true,
})
export class MaskIdPipe implements PipeTransform {
  transform(value: string | null | undefined, showLast: number = 4): string {
    if (!value) {
      return '';
    }

    if (value.length <= showLast) {
      return value;
    }

    const masked = '*'.repeat(value.length - showLast);
    return masked + value.slice(-showLast);
  }
}
