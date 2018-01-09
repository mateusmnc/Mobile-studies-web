import { Injectable } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';

@Injectable()
export class AuthenticationService {
  loggedUser: User;

  constructor(private userService: UserService) { }
  userIsLogged(): Boolean {
    if (this.loggedUser === undefined) {
      return false;
    }
    return true;
  }
  setLoggedUser(user: User) {
    this.loggedUser = this.userService.getFullUserInstance(user);
  }

  getLoggedUser() {
    return this.loggedUser;
  }
}
