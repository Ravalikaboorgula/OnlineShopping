import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';

export const routes: Routes = [
    {path:"nav", component:NavComponent},
    {path:"home", component:HomeComponent}
];
