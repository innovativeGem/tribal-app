import { Component, OnInit, Input } from '@angular/core';

import { Person } from '../../person';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss']
})
export class PetsComponent implements OnInit {

  @Input() person: Person;

  constructor() { }

  ngOnInit() {
  }

}

