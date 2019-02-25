import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fileSize'
})
export class FileSizePipe implements PipeTransform {
/**
 * In smart search level and unit are variable so we need to convert from one
 * to another.
 */
  getConversionLevel(unit: 'smart' | 'kb' | 'mb' | 'gb'): number {
    switch (unit) {
      case 'kb':
        return  1;
      case 'mb':
        return  2;
      case 'gb':
        return  3;
      case 'smart':
        // there is additional condition if conversion is smart so the conversion
        // can stop before gb
        return  3;
    }
  }
/**
 * In smart search level and unit are variable so we need to convert from one
 * to another.
 */
  getUnit(num: 0 | 1 | 2 | 3): 'smart' | 'b' | 'kb' | 'mb' | 'gb' {
    switch (num) {
      case 0:
        return 'b';
      case 1:
        return 'kb';
      case 2:
        return 'mb';
      case 3:
        return 'gb';
    }
  }

  transform(value: number, unit: 'smart' | 'kb' | 'mb' | 'gb', prec: number): string {
    const isSmart = unit === 'smart';
    const conversionLevel = this.getConversionLevel(unit);

    let level: 0 | 1 | 2 | 3 = 0;
    while (
      // conditional condition :) 1st line only if smart conversion
      // makes the conversion level variable
      isSmart ? value > 1024 : true
      && level < conversionLevel
    ) {
      level++;
      value /= 1024;
    }

    return `${value.toFixed(prec)}${this.getUnit((level as any))}`;
  }
}
