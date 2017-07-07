import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
    <div *ngIf="childSelectedAnimal">
      <h3>Edit Animal</h3>
      <label>Name</label>
      <input [(ngModel)]="childSelectedAnimal.name">
      <label>Species</label>
      <input [(ngModel)]="childSelectedAnimal.species">
      <label>Age</label>
      <input [(ngModel)]="childSelectedAnimal.age">
      <label>Diet</label>
      <input [(ngModel)]="childSelectedAnimal.diet">
      <label>Location</label>
      <select [(ngModel)]="childSelectedAnimal.location">
        <option [value]="african-plains">African Plains</option>
        <option [value]="under-the-sea">Under The Sea</option>
        <option [value]="reptile-house">Reptile House</option>
        <option [value]="amazon-rainforest">Amazon Rainforest</option>
        <option [value]="americas">Animals of the Americas</option>
      </select>
      <label>Caretakers</label>
      <input [(ngModel)]="childSelectedAnimal.caretakers">
      <label>Sex</label>
      <input type="radio" [(ngModel)]="childSelectedAnimal.sex" [value]="male">Male<br>
      <input type="radio" [(ngModel)]="childSelectedAnimal.sex" [value]="female">Female<br>
      <label>Likes</label>
      <input [(ngModel)]="childSelectedAnimal.likes">
      <label>Dislikes</label>
      <input [(ngModel)]="childSelectedAnimal.dislikes">
      <button (click)="doneButtonClicked()">Done Editing!</button>
    </div>
  `
})

export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
}
