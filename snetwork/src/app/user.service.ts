import { Injectable } from '@angular/core';
import { User } from './user';
import { USERS } from './mock-users';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class UserService {
  static nextID: number;
  users: User[];

  constructor() {
    this.getUsers().subscribe(users => this.users = users);
    UserService.nextID = this.users.length + 1;
  }

  public isValidUser(user: User): boolean {

    const userFound = this.getFullUserInstance(user);

    if ( userFound == null ) {
      return false;
    }
    return true;
  }

  getFullUserInstance(user: User) {
    return this.users.find(usr => usr.username === user.username && usr.pwd === user.pwd);
  }

  public insertNewUser(user: User) {
    user.id = UserService.nextID;
    USERS.push(user);
    UserService.nextID = UserService.nextID + 1;
    this.getUsers().subscribe(users => this.users = users);
  }

  private getUsers(): Observable<User[]> {
    return of(USERS);
  }
}
