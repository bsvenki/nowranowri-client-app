import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CdkTableModule} from '@angular/cdk/table';
import { MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule, MatProgressBarModule,MatFormFieldModule,MatInputModule,MatRippleModule,MatListModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { routing } from './app.routing';
import 'hammerjs';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './Register/app.RegisterComponent'
import { MediaMatcher } from '@angular/cdk/layout';



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
    MatRippleModule,
    CdkTableModule,
    MatListModule
    
        
  ],
  providers: [MediaMatcher],
  bootstrap: [AppComponent]
})


export class AppModule {}
