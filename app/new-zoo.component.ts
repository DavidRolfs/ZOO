import { Component, Output, EventEmitter } from '@angular/core';
import { Zoo } from './zoo.model';

@Component({
  selector: 'new-zoo',
  template: `
  <h1>New Animal</h1>
   <div>
     <label>Enter species:</label>
     <input #newZooSpecies>
     <label>Enter name:</label>
     <input #newZooName>
     <label>Enter age:</label>
     <input #newZooAge>
     <label>Enter diet:</label>
     <input #newZooDiet>
     <label>Enter location:</label>
     <input #newZooLocation>
     <label>Enter caretakers:</label>
     <input #newZooCaretakers>
     <label>Enter sex:</label>
     <input #newZooSex>
     <label>Enter likes:</label>
     <input #newZooLikes>
     <label>Enter dislikes:</label>
     <input #newZooDislikes>
   </div>
   <div>
      <button (click)="submitForm(newZooSpecies.value, newZooName.value, newZooAge.value, newZooDiet.value, newZooLocation.value, newZooCaretakers.value, newZooSex.value, newZooLikes.value, newZooDislikes.value);">Add</button>
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
