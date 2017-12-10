import { TestBed, async } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatMenuModule, MatIconModule} from '@angular/material';


import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { DataService } from '../app/services/data.service';
import { PetsComponent } from './components/pets/pets.component';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
