import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Zoo } from './zoo.model';

@Component({
  selector: 'edit-zoo',
  template: `
    <div>
        <div *ngIf="childSelectedZoo">
          <h3>{{childSelectedZoo.description}}</h3>
          <hr>
          <h3>Edit Zoo</h3>
          <label>Enter Animal species:</label>
          <input [(ngModel)]="childSelectedZoo.species">
          <label>Enter Animal name:</label>
          <input [(ngModel)]="childSelectedZoo.name">
          <label>Enter Animal age:</label>
          <input [(ngModel)]="childSelectedZoo.age">
          <label>Enter Animal diet:</label>
          <input [(ngModel)]="childSelectedZoo.diet">
          <label>Enter Animal location:</label>
          <input [(ngModel)]="childSelectedZoo.location">
          <label>Enter Animal caretakers:</label>
          <input [(ngModel)]="childSelectedZoo.caretakers">
          <label>Enter Animal sex:</label>
          <input [(ngModel)]="childSelectedZoo.sex">
          <label>Enter Animal likes:</label>
          <input [(ngModel)]="childSelectedZoo.likes">
          <label>Enter Animal dislikes:</label>
          <input [(ngModel)]="childSelectedZoo.dislikes">
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
