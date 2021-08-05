import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'randomUppperCase',
  pure: false
})
export class RandomUppperCasePipe implements PipeTransform {

  transform(value: string, arrUpperIndex: Array<number> = []): string {
    let arrString = Array.from(value);
    arrUpperIndex.forEach((index: number) => {
      arrString[index] = arrString[index].toUpperCase();
    });

    return arrString.join('');
  }

}
