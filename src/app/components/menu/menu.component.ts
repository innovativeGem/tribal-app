import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { DataService } from '../../services/data.service';
import { Person } from '../../person';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  providers: [DataService]
})
export class MenuComponent implements OnInit {

  people: Observable<any[]>;
  gender: String;
  males = [];
  females = [];
  selectedPerson: Person;
  isPersonSelected:Boolean = false;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.people = this.dataService.getData();
    this.people.forEach(parentElement => {
      parentElement.forEach(childElement => {
        if (childElement.gender === 'Male') {
          this.males.push(childElement);
        }else {
          this.females.push(childElement);
        }
      });
    });

  }

  personSelected(person) {
    console.log(person.name);
    this.selectedPerson = person;
    this.isPersonSelected = true;
  }

  sortByName(arr){
    arr.sort(function(a, b) {
      var nameA = a.name.toUpperCase();
      var nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    });
  }

}

