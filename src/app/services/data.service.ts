import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { Pet } from '../pet';

@Injectable()
export class DataService {

  people: Observable<any[]>;
  males = [];
  females = [];

  mypets: Pet[] = [];

  constructor(private http: Http) {
    this.displayPeople();
   }

  sortByName(arr) {
    arr.sort(function(a, b) {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
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

  getData() {
    return this.http.get(`assets/people.json`)
    .map((res: Response) => res.json());
  }

  getPets(person) {
    // console.log('person.pets: ' + person.pets);
    person.pets.forEach(pet => {
      this.mypets.push(pet);
    });

    this.sortByName(this.mypets);
    console.log('mypets: ' , person.pets.length);
  }

  displayPeople() {
    this.people = this.getData();
    this.people.forEach(parentElement => {
      parentElement.forEach(childElement => {
        if (childElement.gender === 'Male') {
          this.males.push(childElement);
          this.sortByName(this.males);
        }else {
          this.females.push(childElement);
          this.sortByName(this.females);
        }
      });
    });
  }

}
