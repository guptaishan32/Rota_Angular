import { Pipe, PipeTransform } from '@angular/core';
import { Event } from '../shared/events';

@Pipe({
  name: 'myfilter'
})
export class MyfilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(!args){
      return value;
    }
    else
    args = args.charAt(0).toUpperCase();

    return value.filter(event =>{
      return event.Month.indexOf(args)!==-1
    })
  }

}
