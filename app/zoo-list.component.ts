import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Zoo } from './zoo.model';

@Component({
  selector: 'zoo-list',
  template: `
    <select (change)="onChange($event.target.value)">
      <option value="allAnimals">All Animals</option>
      <option value="oldAnimals">Animals over the age of 2</option>
      <option value="youngAnimals" selected="selected">Animals under the age of 2</option>
    </select>
    <h3> Click an Animal to edit its information" </h3>
    <ul>
      <li (click)="editButtonHasBeenClicked(currentZoo)" *ngFor="let currentZoo of childZooList | viewAge:filterByAge">
      <span class="title">Species:</span> {{currentZoo.species}}
      <br>
      Name: {{currentZoo.name}}
      <br>
      Age: {{currentZoo.age}}
      <br>
      Diet: {{currentZoo.diet}},
      <br>
      Location: {{currentZoo.location}},
      <br>
      Caretakers: {{currentZoo.caretakers}},
      <br>
      Sex: {{currentZoo.sex}},
      <br>
      Likes: {{currentZoo.likes}},
      <br>
      Dislikes: {{currentZoo.dislikes}}
      <br>
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

  filterByAge: string = "youngAnimals";

  onChange(optionFromMenu) {
  this.filterByAge = optionFromMenu;
  }
}
