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
  petCategories: PetCategories[] = [];

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
    var self = this;
    this.mypets = [];
    this.petCategories = [];
    var category = [];
    var petNames = [];
    // console.log('person.pets: ' + person.pets);
    person.pets.forEach((pet, i) => {
      this.mypets.push(pet);
      // this.petCategories.push
      console.log('this.mypets: ' , this.mypets);
      if (category.indexOf(pet.type) === -1) {
        category.push(pet.type);
        // petNames.push(pet.name);
      }
      // console.log('this.petCategories: ' , this.petCategories);
    });

    category.forEach((c, j) => {
      category = [];
      petNames = [];
      this.mypets.forEach(pet => {
        if(c === pet.type){
          petNames.push(pet.name);
        }
      });
      petNames.sort();
      this.petCategories.push({type: c, names:petNames});
    });

    console.log('this.petCategories: ' , this.petCategories);

    // this.petCategories.push({type: category, names:petNames});

    this.sortByName(this.mypets);
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

interface PetCategories {
  type: string;
  names: any[];
}
