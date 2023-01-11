import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pet } from '../domain/Pet';
import { PetsService } from '../services/pets.service';

@Component({
  selector: 'app-pets-table',
  templateUrl: './pets-table.component.html',
  styleUrls: ['./pets-table.component.css']
})
export class PetsTableComponent implements OnInit {

  pets: Pet[] = [];

  constructor(public petService: PetsService, public router: Router){}

  ngOnInit(): void {
    this.get()
  }

  public get() {
    this.petService.getAll().subscribe({
      next: (resp) => this.pets = resp,
      error: (err : HttpErrorResponse) => {
        if (err.status == 403 || 401) { 
            this.router.navigate(["/login"])
        } 
      }
    })
  }

}
