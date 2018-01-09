import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loggedUser: User;
  users: User[];

  constructor(private userService: UserService, private router: Router, private authService: AuthenticationService) { }

  ngOnInit() {
  }

  login(user) {
    const isValidUser = this.userService.isValidUser(new User(user.username.value, user.pwd.value));

    if (isValidUser === false) {
      return;
    }
    this.authService.setLoggedUser(new User(user.username.value, user.pwd.value));
    this.router.navigate(['/home']);

  }

}
