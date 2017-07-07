import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
  <button (click)="addNewAnimalClicked()">Welcome A New Animal</button>
    <div *ngIf="childAnimalInput">
      <label>Name</label>
      <input #name>
      <label>Species</label>
      <input #species>
      <label>Age</label>
      <input #age>
      <label>Diet</label>
      <input #diet>
      <label>Location</label>
      <select #location>
        <option [value]="african-plains">African Plains</option>
        <option [value]="under-the-sea">Under The Sea</option>
        <option [value]="reptile-house">Reptile House</option>
        <option [value]="amazon-rainforest">Amazon Rainforest</option>
        <option [value]="americas">Animals of the Americas</option>
      </select>
      <label>Caretakers</label>
      <input #caretakers>
      <label>Sex</label>
      <input type="radio" #sex [value]="male">Male<br>
      <input type="radio" #sex [value]="female">Female<br>
      <label>Likes</label>
      <input #likes>
      <label>Dislikes</label>
      <input #dislikes>
      <button (click)="submitNewAnimalForm(name.value, species.value, age.value, diet.value, location.value, caretakers.value, sex.value, likes.value, dislikes.value); name.value=''; species.value=''; age.value=''; diet.value=''; location.value=''; caretakers.value=''; likes.value=''; dislikes.value=''">Add Animal</button>
      <button (click)="doneButtonClicked()">All Done!</button>
    </div>
  `
})

export class NewAnimalComponent {
  @Input() childAnimalInput: boolean;
  @Output() newAnimalSender = new EventEmitter();
  @Output() addNewAnimalClickedSender = new EventEmitter();
  @Output() doneAddingButtonClickedSender = new EventEmitter();

  submitNewAnimalForm(name: string, species: string, age: number, diet: string, location: string, caretakers: number, sex: string, likes: string, dislikes: string) {
    var newAnimalToAdd: Animal = new Animal(name, species, age, diet, location, caretakers, sex, likes, dislikes);
    this.newAnimalSender.emit(newAnimalToAdd);
  }

  addNewAnimalClicked() {
    this.addNewAnimalClickedSender.emit();
  }

  doneButtonClicked() {
    this.doneAddingButtonClickedSender.emit();
  }
}
