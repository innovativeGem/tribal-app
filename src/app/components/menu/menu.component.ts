import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { DataService } from '../../services/data.service';
import { Person } from '../../person';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  // people: Observable<any[]>;
  gender: String;
  males = [];
  females = [];
  selectedPerson: Person;
  isPersonSelected: Boolean = false;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.males = this.dataService.males;
    this.females = this.dataService.females;

  }

  personSelected(person) {
    this.isPersonSelected = true;
    this.selectedPerson = person;
    this.dataService.getPets(person);
  }

}

