import { Component, OnInit } from '@angular/core';
import { Pet } from '../domain/Pet';
import { PetsService } from '../services/pets.service';

@Component({
  selector: 'app-pets-table',
  templateUrl: './pets-table.component.html',
  styleUrls: ['./pets-table.component.css']
})
export class PetsTableComponent implements OnInit {

  pets: Pet[] = [];

  constructor(public petService: PetsService){}

  ngOnInit(): void {
    this.get()
  }

  public get() {
    this.petService.getAll().subscribe(resp => this.pets = resp)
  }

}
