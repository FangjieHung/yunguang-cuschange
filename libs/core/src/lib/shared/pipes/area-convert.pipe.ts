/* eslint-disable @typescript-eslint/no-explicit-any */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'areaConvert'
})
export class AreaConvertPipe implements PipeTransform {

  /**
   * @param value 原始數值（坪 or m²）
   * @param mode 'toPing'：m² ➜ 坪，'toM2'：坪 ➜ m²（預設 'toPing'）
   * @param digits 保留幾位小數（預設 2）
   * @param defaultValue 無效值時回傳預設（預設 '-'）
   */
  transform(
    value: any,
    mode: 'toPing' | 'toM2' = 'toPing',
    digits = 2,
    defaultValue: string | number = '-'
  ): string {
    const num = Number(value);

    if (isNaN(num)) {
      return String(defaultValue);
    }

    let result: number;

    if (mode === 'toPing') {
      result = num / 3.305785;
    } else if (mode === 'toM2') {
      result = num * 3.305785;
    } else {
      return String(defaultValue); // 防止 mode 錯誤
    }

    return result.toFixed(digits);
  }
}
