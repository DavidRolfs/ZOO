import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>Zoo Log For {{month}}/{{day}}/{{year}}</h1>
      <h3>{{currentFocus}}</h3>
    </div>
  `
})

export class AppComponent {
  currentFocus: string = 'Zoo';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  
}