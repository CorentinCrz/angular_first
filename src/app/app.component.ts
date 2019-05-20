/**
 * Configuration
 */
//NodeJs
import { Component, OnInit } from '@angular/core';

// Declaration
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles : [`
    .highSalary{ color: red }
  `]
})

/**
 * Export
 */
export class AppComponent implements OnInit {
  /**
   * Declaration
   */
  public title: string;
  public dataCollection: Array<any>;

  // class injection
  constructor(){
    this.title = 'Hello Angular';
    this.dataCollection = [
        {
          "id": "1493",
          "employee_name": "Julien",
          "employee_salary": "0",
          "employee_age": "39"
        },
        {
          "id": "1494",
          "employee_name": "AL",
          "employee_salary": "2200",
          "employee_age": "25"
        },
        {
          "id": "1496",
          "employee_name": "Eminem",
          "employee_salary": "2323",
          "employee_age": "34"
        },
        {
          "id": "1497",
          "employee_name": "Adam 5",
          "employee_salary": "1111",
          "employee_age": "35"
        },
        {
          "id": "1500",
          "employee_name": "Adam 8",
          "employee_salary": "1111",
          "employee_age": "35"
        }
      ];
  }

  /**
  * Méthodes
  */
 public sayHello = ( name: string ) => {
   this.title = `Hello ${name}`
 }

  /**
   * Hooks
   */
  // eq. DOMContentLoadeed
  ngOnInit(): void {
    console.log('Component is fully loaded');
  }
}
