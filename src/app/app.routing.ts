import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './Register/app.RegisterComponent';

const appRoutes:Routes=[
    {path: '', component:HomeComponent },
    { path: 'about', component: AboutComponent },
    {path: 'register', component: RegisterComponent}
]

export const routing: ModuleWithProviders=RouterModule.forRoot(appRoutes);  
