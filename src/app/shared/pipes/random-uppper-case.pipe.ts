import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'randomUppperCase',
  pure: false
})
export class RandomUppperCasePipe implements PipeTransform {

  transform(value: string, arrUpperIndex: Array<number> = []): string {
    if (arrUpperIndex.length > value.length) {
      arrUpperIndex.length = value.length;
    }
    let arrString = Array.from(value);
    arrUpperIndex.forEach((index: number) => {
      if (arrString[index]) {
        arrString[index] = arrString[index].toUpperCase();
      }
    });

    return arrString.join('');
  }

}
