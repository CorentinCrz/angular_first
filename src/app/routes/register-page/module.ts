/* 
Imports 
*/
    // Angular
    import { NgModule } from '@angular/core';
    import { CommonModule } from '@angular/common';

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