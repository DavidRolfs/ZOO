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
      Species: <span class="title">{{currentZoo.species}}</span>
      <br>
      Name:<span class="title">{{currentZoo.name}}</span>
      <br>
      Age: <span class="title">{{currentZoo.age}}</span>
      <br>
      Diet: <span class="title">{{currentZoo.diet}}</span>
      <br>
      Location: <span class="title">{{currentZoo.location}}</span>
      <br>
      Caretakers: <span class="title">{{currentZoo.caretakers}}</span>
      <br>
      Sex: <span class="title">{{currentZoo.sex}}</span>
      <br>
      Likes: <span class="title">{{currentZoo.likes}}</span>
      <br>
      Dislikes: <span class="title">{{currentZoo.dislikes}}</span>
      <br/><br/>
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
