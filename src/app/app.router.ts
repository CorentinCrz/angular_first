/* 
Imports
*/
    // Angular
    import { Routes } from '@angular/router';
//

/* 
Export
*/
    export const MainRouter: Routes = [
        {
            path: '',
            loadChildren: './routes/home-page/module#Module'
        }
    ];
//