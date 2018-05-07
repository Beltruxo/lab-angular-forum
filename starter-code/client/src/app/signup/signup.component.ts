import { Component, OnInit } from '@angular/core';
import { AuthRoutesService } from '../authRoutes.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  username: string;
  password: string;
  email: string;
  constructor(public myService: AuthRoutesService, public router: Router) { }

  ngOnInit() {
  }
  signup() {
    const user = {
      username: this.username,
      password: this.password,
      email: this.email
    };
    console.log(user);
    this.myService.signup(user).subscribe();
  }
}


