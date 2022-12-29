import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Pet } from '../domain/Pet';
import { PetsService } from '../services/pets.service';

@Component({
  selector: 'app-pet-form',
  templateUrl: './pet-form.component.html',
  styleUrls: ['./pet-form.component.css']
})
export class PetFormComponent implements OnInit{

  @Input() petId: string | undefined
  @Output() onSaveEvent = new EventEmitter<Pet>()

  petForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(4)]),
    code: new FormControl(null, [Validators.required, Validators.minLength(4)]),
    color:  new FormControl(null, [Validators.required]),
    petType:  new FormControl(null, [Validators.required]),
  })

  constructor(public petService: PetsService, public router: Router){}

  ngOnInit(): void {
    if(this.petId !== null && this.petId && this.petId.length > 0) {
      this.petService.getById(this.petId).subscribe(resp => {
        this.petForm.get('name')?.setValue(resp.name);
        this.petForm.get('code')?.setValue(resp.code);
        this.petForm.get('color')?.setValue(resp.color);
        this.petForm.get('petType')?.setValue(resp.petType);
      })
    }
  }

  onSaveClick(){
    if (this.petForm.get('name')?.valid && this.petForm.get('code') && this.petForm.get('color') && this.petForm.get('petType')) {
      let pet = {
        id: this.petId,
        name: this.petForm.get('name')?.value,
        code:  this.petForm.get('code')?.value,
        color: this.petForm.get('color')?.value,
        petType: this.petForm.get('petType')?.value,
      } as Pet
      this.onSaveEvent.emit(pet);
      this.router.navigate(['/'])
    }
  }

}
