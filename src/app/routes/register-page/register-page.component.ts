import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from "@angular/forms";

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styles: []
})
export class RegisterPageComponent implements OnInit {

  /**
   * Déclaration
   */
  // Variables
  public formData: FormGroup;

  //Injection
  constructor(
    private FormBuilder: FormBuilder
  ) { }

  /**
   * Methods
   */
  private resetForm = () => {
    // Définit les valeurs de l'objet formData
    this.formData = this.FormBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      streetAddress: ['', Validators.required],
      familyName: ['', Validators.required],
      givenName: ['', Validators.required]
    })
  }

  public submitForm = () => {
    console.log(this.formData);
  }

  /**
   * Hook
   */
  ngOnInit() {
    this.resetForm();
  }

}
