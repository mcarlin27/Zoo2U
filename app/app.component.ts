import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>Tap Room</h1>
      <hr>
      <p *ngIf="patron" (click)="patronIsShown()">Patron</p>
      <p *ngIf="employee" (click)="employeeIsShown()">Employee</p>
      <div *ngIf="patronIsHidden">
        <p>Hello, patron</p>
      </div>
      <div *ngIf="employeeIsHidden">
        <p>Hello, employee</p>
      </div>
    </div>
  `
})

export class AppComponent {

  patron = true;
  employee = true;
  patronIsHidden = false;
  employeeIsHidden = false;

  masterAnimalList: Animal[] = [
    new Animal('Lion', 'Simba', 2, 'carnivore', 'African Plains Exhibit', 2, 'male', 'Timon, Pumbaa, singing, Hamlet', 'Scar, wildebeests, worries'),
    new Animal('Lion', 'Simba', 2, 'carnivore', 'African Plains Exhibit', 2, 'male', 'Timon, Pumbaa, singing, Hamlet', 'Scar, wildebeests, worries')
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
}
