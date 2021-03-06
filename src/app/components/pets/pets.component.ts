import { Component, OnInit, OnChanges, SimpleChange, Input } from '@angular/core';

import { DataService } from '../../services/data.service';
import { Person } from '../../person';
import { Pet } from '../../pet';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss']
})
export class PetsComponent implements OnInit, OnChanges {

  @Input() person: Person;

  categories: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  ngOnChanges(changes) {
    this.categories = this.dataService.petCategories;
  }


}

