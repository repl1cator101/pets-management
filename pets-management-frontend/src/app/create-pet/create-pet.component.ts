import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Pet } from '../domain/Pet';
import { PetsService } from '../services/pets.service';

@Component({
  selector: 'app-create-pet',
  templateUrl: './create-pet.component.html',
  styleUrls: ['./create-pet.component.css']
})
export class CreatePetComponent {
  constructor(public petService: PetsService, private router: Router){}

  onSave(pet: Pet){
    this.petService.add(pet).subscribe(_ => {this.router.navigate(["/"])});
  }
}
