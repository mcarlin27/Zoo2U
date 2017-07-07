import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>Zoo2U</h1>
      <hr>
      <p *ngIf="patron" (click)="patronIsShown()">Patron</p>
      <p *ngIf="employee" (click)="employeeIsShown()">Employee</p>
      <div *ngIf="patronIsHidden">
        <p>Hello, patron</p>

        <patron-animal-list [childPatronAnimalList]="masterAnimalList"></patron-animal-list>

      </div>
      <div *ngIf="employeeIsHidden">
        <p>Hello, employee</p>

        <animal-list [childAnimalList]="masterAnimalList" (editClickSender)="editAnimal($event)" (deleteClickSender)="delete($event)"></animal-list>

        <new-animal [childAnimalInput]="addAnimalInput" (newAnimalSender)="addAnimal($event)" (addNewAnimalClickedSender)="showNewAnimalForm()" (doneAddingButtonClickedSender)="hideNewAnimalForm()"></new-animal>

        <edit-animal [childSelectedAnimal]="selectedAnimal" (doneButtonClickedSender)="hideAnimalEditForm()"></edit-animal>

      </div>
    </div>
  `
})

export class AppComponent {

  patron = true;
  employee = true;
  patronIsHidden = false;
  employeeIsHidden = false;
  addAnimalInput = false;
  selectedAnimal: Animal = null;
  index = null;

  masterAnimalList: Animal[] = [
    new Animal('Simba', 'Lion', 2, 'carnivore', 'African Plains Exhibit', 2, 'male', 'Timon, Pumbaa, singing, Hamlet', 'Scar, wildebeests, worries'),
    new Animal('Ariel', 'Mermaid', 16, 'omnivore', 'Under The Sea', 0, 'female', 'gadgets, gizmos, thingamabobs, Prince Eric, walking', 'Sea Witches, contract negotiation')
  ];

  patronIsShown() {
    this.patronIsHidden = true;
    this.employeeIsHidden = false;
    this.patron = false;
    this.employee = true;
  }

  employeeIsShown() {
    this.employeeIsHidden = true;
    this.patronIsHidden = false;
    this.employee = false;
    this.patron = true;
  }

  editAnimal(clickedAnimal: Animal) {
    this.selectedAnimal = clickedAnimal;
    console.log(clickedAnimal);
    console.log(this.selectedAnimal);
  }

  hideAnimalEditForm() {
    this.selectedAnimal = null;
  }

  showNewAnimalForm() {
    this.addAnimalInput = true;
  }

  addAnimal(newAnimalFromChild) {
    this.masterAnimalList.push(newAnimalFromChild);
  }

  hideNewAnimalForm() {
    this.addAnimalInput = false;
  }

  delete(clickedAnimal) {
    var animal = clickedAnimal;
    this.index = this.masterAnimalList.indexOf(animal);
    this.masterAnimalList.splice(this.index, 1);
  }
}
