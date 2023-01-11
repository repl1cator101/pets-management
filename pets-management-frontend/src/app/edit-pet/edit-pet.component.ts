import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pet } from '../domain/Pet';
import { PetsService } from '../services/pets.service';

@Component({
  selector: 'app-edit-pet',
  templateUrl: './edit-pet.component.html',
  styleUrls: ['./edit-pet.component.css']
})
export class EditPetComponent implements OnInit{
  
  petId!: string | null;

  constructor(public petService: PetsService, private route: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    this.petId = this.route.snapshot.paramMap.get('id');
  }

  onSave(pet: Pet){
    this.petService.update(pet).subscribe(_ => {this.router.navigate(["/"])});
  }
}
