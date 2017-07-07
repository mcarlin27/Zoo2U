import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'patron-animal-list',
  template: `
  <ul>
    <li *ngFor="let currentAnimal of childPatronAnimalList">{{currentAnimal.name}}, {{currentAnimal.species}}</li>
  </ul>
  `
})

export class PatronAnimalListComponent {
  @Input() childPatronAnimalList: Animal[];
}
