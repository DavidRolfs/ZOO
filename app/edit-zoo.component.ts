import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Zoo } from './zoo.model';

@Component({
  selector: 'edit-zoo',
  template: `
    <div>
        <div *ngIf="childSelectedZoo">
          <h3>{{childSelectedZoo.description}}</h3>
          <h3>Edit Animal</h3>
          <label>Enter Animal species:</label>
          <input [(ngModel)]="childSelectedZoo.species">
          <br>
          <label>Enter Animal name:</label>
          <input [(ngModel)]="childSelectedZoo.name">
          <br>
          <label>Enter Animal age:</label>
          <input [(ngModel)]="childSelectedZoo.age">
          <br>
          <label>Enter Animal diet:</label>
          <input [(ngModel)]="childSelectedZoo.diet">
          <br>
          <label>Enter Animal location:</label>
          <input [(ngModel)]="childSelectedZoo.location">
          <br>
          <label>Enter Animal caretakers:</label>
          <input [(ngModel)]="childSelectedZoo.caretakers">
          <br>
          <label>Enter Animal sex:</label>
          <input [(ngModel)]="childSelectedZoo.sex">
          <br>
          <label>Enter Animal likes:</label>
          <input [(ngModel)]="childSelectedZoo.likes">
          <br>
          <label>Enter Animal dislikes:</label>
          <input [(ngModel)]="childSelectedZoo.dislikes">
          <br>
          <button (click)="doneButtonClicked()">Done</button>
        </div>
      </div>
  `
})

export class EditZooComponent {
  @Input() childSelectedZoo: Zoo;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }

}
