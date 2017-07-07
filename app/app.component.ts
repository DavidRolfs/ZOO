import { Component } from '@angular/core';
import { Zoo } from './zoo.model';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>Zoo Tracker For {{month}}/{{day}}/{{year}}</h1>
      <h3>{{currentFocus}}</h3>
      <zoo-list [childZooList]="masterZooList" (clickSender)="editZoo($event)"></zoo-list>
      <hr>
      <edit-zoo [childSelectedZoo]="selectedZoo" (doneButtonClickedSender)="finishedEditing()"></edit-zoo>
      <new-zoo (newZooSender)="addZoo($event)"></new-zoo>
    </div>
  `
})

export class AppComponent {
  currentFocus: string = 'Zoo';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  selectedZoo = null;

  masterZooList: Zoo[] = [
    new Zoo('Arctic Fox', 'Moon', 2, 'Carnivore', 'Northern Trail', 5, 'Female', 'Cool shade', 'Loud noises'),

    new Zoo('Ocelot', 'Prince', 4, 'Carnivore', 'Tropical Rain Forest Building', 6, 'Male', 'Laying in the sunshine', 'Toys that are not rope-based'),

    new Zoo('Noethwest Black Tailed Deer', 'Tinkerbell', 8, 'Herbivore', 'Northern Trail', 2, 'Female', 'Delicate roots and leaves', 'Loud noises'),
  ];

  editZoo(clickedZoo) {
    this.selectedZoo = clickedZoo;
  }

  finishedEditing() {
    this.selectedZoo = null;
  }

  addZoo(newZooFromChild: Zoo) {
    this.masterZooList.push(newZooFromChild);
  }

}
