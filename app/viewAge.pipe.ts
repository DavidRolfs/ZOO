import {Pipe, PipeTransform} from '@angular/core';
import {Zoo} from './zoo.model';


@Pipe({
  name: "viewAge",
  pure: false
})


export class ViewAgePipe implements PipeTransform {
  transform(input: Zoo[], desiredAge){
    var output: Zoo[] = [];
    if(desiredAge === "youngAnimals"){
    for (var i = 0; i < input.length; i++) {
      if (input[i].age <= 2) {
        output.push(input[i]);
      }
    }
        return output;
    } else if (desiredAge === "oldAnimals") {
        for (var i = 0; i < input.length; i++) {
          if (input[i].age > 2) {
            output.push(input[i]);
          }
        }
        return output;
      } else {
        return input;
      }
  }
}
