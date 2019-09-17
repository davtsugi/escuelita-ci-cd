import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { Utils } from '../utilities/utils';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.user.username = "user1@practia.global";
    this.user.password = "123456";
  }

  login() {
    if (!Utils.IsValidString(this.user.username)) {
      console.error("Invalid username");
      return;
    }
    if (!Utils.IsValidString(this.user.password)) {
      console.error("Invalid password");
      return;
    }
    this.router.navigateByUrl("/home");
  }

}
