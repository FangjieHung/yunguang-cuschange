/* eslint-disable @typescript-eslint/no-explicit-any */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'roundDefault'
})
export class RoundDefaultPipe implements PipeTransform {

    /**
     * @param value 要轉換的值（可為 string 或 number）
     * @param digits 保留幾位小數（預設 0）
     * @param defaultValue 當 value 無效時回傳的預設值（預設 '-'）
     * @param useThousandSeparator 是否使用千分位逗號（預設 true）
     */
    transform(
        value: any,
        digits = 0,
        defaultValue: string | number = '-',
        useThousandSeparator = true
    ): string {
        const num = Number(value);

        if (isNaN(num)) {
            return String(defaultValue);
        }

        const fixed = num.toFixed(digits);

        if (!useThousandSeparator) {
            return fixed;
        }

        const [intPart, decimalPart] = fixed.split('.');
        const withComma = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

        return decimalPart ? `${withComma}.${decimalPart}` : withComma;
    }
}
