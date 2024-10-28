import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'miPipe',
  standalone: true
})
export class MiPipePipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return value;
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

}
