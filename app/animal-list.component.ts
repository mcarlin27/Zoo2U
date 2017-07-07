import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <select (change)="onChange($event.target.value)">
      <option value="allAnimals">All Animals</option>
      <option value="youngAnimals">Young Animals</option>
      <option value="oldAnimals" selected="selected">Old Animals</option>
    </select>

  <ul>
    <li *ngFor="let currentAnimal of childAnimalList | age:filterByAge">{{currentAnimal.name}}, {{currentAnimal.species}}
    <button (click)="editButtonHasBeenClicked(currentAnimal)">Edit!</button>
    <button (click)="deleteButtonHasBeenClicked(currentAnimal)">Delete Animal!</button></li>
  </ul>
  `
})

export class AnimalListComponent {
  filterByAge: string = "allAnimals";
  @Input() childAnimalList: Animal[];
  @Output() editClickSender = new EventEmitter();
  @Output() deleteClickSender = new EventEmitter();

  onChange(optionFromMenu) {
    this.filterByAge = optionFromMenu;
  }

  editButtonHasBeenClicked(animalToEdit: Animal) {
    this.editClickSender.emit(animalToEdit);
  }

  deleteButtonHasBeenClicked(animalToDelete: Animal) {
    this.deleteClickSender.emit(animalToDelete);
  }
}
