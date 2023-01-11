import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IdentityModel } from '../domain/IdentityModel';
import { IdentityService } from '../services/identity.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  error: boolean = false;

  loginForm = new FormGroup({
    username: new FormControl("test", [Validators.required, Validators.minLength(4)]),
    password: new FormControl("test", [Validators.required, Validators.minLength(4)])
  })
  

  constructor(public identityService: IdentityService, private router: Router){}

  onSaveClick(){
    let username = this.loginForm.get("username")
    let password = this.loginForm.get("username")
    if (username?.valid && password?.valid) {
      this.identityService.login({name: username.value, password: password.value} as IdentityModel).subscribe(
        {
          next: (jwtResponse) => {
            localStorage.setItem("jwt", jwtResponse.jwt);
            this.router.navigate(["/"])
          },
          error: (error) => {this.error = true; console.log(error)}
        },
      )
    } else {
      console.log("not valid")
    }
  }
}
