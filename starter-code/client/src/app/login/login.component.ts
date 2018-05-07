import { Component, OnInit } from '@angular/core';
import { AuthRoutesService } from '../authRoutes.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  email: string;
  password: string;
  
  constructor(public myService: AuthRoutesService, public router: Router) { }

  ngOnInit() {
  }
  login() {
    console.log(this.username, this.password);
    this.myService.login(this.username, this.password).subscribe(()=> this.router.navigate(["/home"]));
  }
}
