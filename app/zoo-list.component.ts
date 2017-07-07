import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Zoo } from './zoo.model';

@Component({
  selector: 'zoo-list',
  template: `
    <select (change)="onChange($event.target.value)">
      <option value="allAnimals" selected="selected">All Animals</option>
      <option value="oldAnimals">Animals over the age of 2</option>
      <option value="youngAnimals">Animals under the age of 2</option>
    </select>
    <ul>
      <li *ngFor="let currentZoo of childZooList">{{currentZoo.species}}, {{currentZoo.name}}, {{currentZoo.age}}, {{currentZoo.diet}}, {{currentZoo.location}}, {{currentZoo.caretakers}}, {{currentZoo.sex}}, {{currentZoo.likes}}, {{currentZoo.dislikes}}<button (click)="editButtonHasBeenClicked(currentZoo)">Edit!</button>
      </li>
    </ul>
  `
})

export class ZooListComponent {
  @Input() childZooList: Zoo[];
  @Output() clickSender = new EventEmitter();

  editButtonHasBeenClicked(zooToEdit: Zoo) {
    this.clickSender.emit(zooToEdit);
  }
}
