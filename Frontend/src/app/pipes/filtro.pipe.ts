import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(value: any, args: any):any {
    const results = [];
    for(const result of value ){
if (result.nombre.toLowerCase().indexOf(args.toLowerCase()) > -1) {
        results.push(result);
      }
    }
    return results;
  }

}
