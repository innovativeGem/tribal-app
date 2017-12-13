import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatMenuModule, MatIconModule} from '@angular/material';


import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { DataService } from '../app/services/data.service';
import { PetsComponent } from './components/pets/pets.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PetsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
