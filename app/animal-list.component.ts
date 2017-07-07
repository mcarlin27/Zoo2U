import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <ul>
    <li *ngFor="let currentAnimal of childAnimalList">{{currentAnimal.name}}, {{currentAnimal.species}}
    <button (click)="editButtonHasBeenClicked(currentAnimal)">Edit!</button>
    <button (click)="deleteButtonHasBeenClicked(currentAnimal)">Delete Animal!</button></li>
  </ul>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();
  @Output() deleteClickSender = new EventEmitter();

  editButtonHasBeenClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }

  deleteButtonHasBeenClicked(animalToDelete: Animal) {
    this.deleteClickSender.emit(animalToDelete);
  }
}
