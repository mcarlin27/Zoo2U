import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'patron-animal-list',
  template: `
  <select (change)="onChange($event.target.value)">
      <option value="allAnimals" selected="selected">All Animals</option>
      <option value="youngAnimals">Young Animals</option>
      <option value="oldAnimals">Old Animals</option>
  </select>
  <ul>
    <li *ngFor="let currentAnimal of childPatronAnimalList | age:filterByAge">{{currentAnimal.name}}, {{currentAnimal.species}}</li>
  </ul>
  `
})

export class PatronAnimalListComponent {
  filterByAge: string = "allAnimals";
  @Input() childPatronAnimalList: Animal[];

  onChange(optionFromMenu) {
    this.filterByAge = optionFromMenu;
  }
}
