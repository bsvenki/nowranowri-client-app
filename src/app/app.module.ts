import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule, MatProgressBarModule,MatFormFieldModule,MatInputModule,MatRippleModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { routing } from './app.routing';
import 'hammerjs';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './Register/app.RegisterComponent'



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    routing, 
    MatToolbarModule, 
    MatButtonModule, 
    MatIconModule, 
    MatSidenavModule,
    MatProgressBarModule,
    BrowserAnimationsModule,     
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
