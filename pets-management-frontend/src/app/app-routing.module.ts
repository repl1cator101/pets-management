import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePetComponent } from './create-pet/create-pet.component';
import { EditPetComponent } from './edit-pet/edit-pet.component';
import { LoginComponent } from './login/login.component';
import { PetsTableComponent } from './pets-table/pets-table.component';

const routes: Routes = [
  {path: '', component: PetsTableComponent},
  {path: 'login', component: LoginComponent},
  {path: 'create', component: CreatePetComponent},
  {path: 'edit/:id', component: EditPetComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
