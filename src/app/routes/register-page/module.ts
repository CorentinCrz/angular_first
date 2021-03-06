/* 
Imports 
*/
    // Angular
    import { NgModule } from '@angular/core';
    import { CommonModule } from '@angular/common';

    // => Gestion des forms
    import { FormsModule, ReactiveFormsModule } from "@angular/forms";

    // Inner
    import { RegisterPageComponent } from './register-page.component';
    import { Routing } from './router';
//


/* 
Definition 
*/
    @NgModule({
        declarations: [ RegisterPageComponent ],
        imports: [ 
            CommonModule, 
            FormsModule,
            ReactiveFormsModule,

            // Ajouter le router dans le tableau des imports
            Routing
        ]
    })
//


/* 
Export 
*/
    export class Module {};
//