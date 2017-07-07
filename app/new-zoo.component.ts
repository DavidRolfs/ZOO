import { Component, Output, EventEmitter } from '@angular/core';
import { Zoo } from './zoo.model';

@Component({
  selector: 'new-zoo',
  template: `
  <h1>New Animal</h1>
   <div>
     <label>Enter species:</label>
     <input #newZooSpecies>
     <br>
     <label>Enter name:</label>
     <input #newZooName>
     <br>
     <label>Enter age:</label>
     <input #newZooAge>
     <br>
     <label>Enter diet:</label>
     <input #newZooDiet>
     <br>
     <label>Enter location:</label>
     <input #newZooLocation>
     <br>
     <label>Enter caretakers:</label>
     <input #newZooCaretakers>
     <br>
     <label>Enter sex:</label>
     <input #newZooSex>
     <br>
     <label>Enter likes:</label>
     <input #newZooLikes>
     <br>
     <label>Enter dislikes:</label>
     <input #newZooDislikes>
     <br>
   </div>
   <div>
      <button (click)="submitForm(newZooSpecies.value, newZooName.value, newZooAge.value, newZooDiet.value, newZooLocation.value, newZooCaretakers.value, newZooSex.value, newZooLikes.value, newZooDislikes.value);
      newZooSpecies.value = '' + newZooName.value = '' + newZooAge.value = '' + newZooDiet.value = '' + newZooLocation.value = '' + newZooCaretakers.value = '' + newZooSex.value = '' + newZooLikes.value = '' + newZooDislikes.value = '';">Add</button>
    </div>
  `
})

export class NewZooComponent {
  @Output() newZooSender = new EventEmitter();

  submitForm(species: string, name: string, age: number, diet: string, location: string, caretakers: number, sex: string, likes: string, dislikes: string) {
    var newZooToAdd: Zoo = new Zoo(species, name, age, diet, location, caretakers, sex, likes, dislikes);
    this.newZooSender.emit(newZooToAdd);
  }
}
