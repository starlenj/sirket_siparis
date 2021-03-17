import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: "sortOrderData"
})

export class OrderDataPipe implements PipeTransform {
  transform(array: any[], field: string): any[] {
    return Array.isArray(array) ? array.slice().sort((a: any, b: any) => (a[field] > b[field]) ? 1 : -1) : array;
  }
}
