import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from "@angular/forms";

import { UserService } from "../../services/user/user.service";

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',

  // Ajouter le service dans le tableau des providers
  providers: [ UserService ]
})
export class RegisterPageComponent implements OnInit {

  /**
   * Déclaration
   */
  // Variables
  public formData: FormGroup;

  //Injection
  constructor(
    private FormBuilder: FormBuilder,
    private UserService: UserService
  ) { }

  /**
   * Methods
   */
  private resetForm = () => {
    // Définit les valeurs de l'objet formData
    this.formData = this.FormBuilder.group({
      email: ['corentin.croizat@hetic.net', Validators.required],
      password: ['azerty123', Validators.required],
      streetAddress: ['3 rue du progres', Validators.required],
      familyName: ['croizat', Validators.required],
      givenName: ['corentin', Validators.required]
    })
  }

  public submitForm = () => {
    console.log(this.formData.value);

    this.UserService.createItem( this.formData.value )
    .then( bddResponse => console.log(bddResponse) )
    .catch( bddResponse => console.error(bddResponse) )
  }

  /**
   * Hook
   */
  ngOnInit() {
    this.resetForm();
  }

}
