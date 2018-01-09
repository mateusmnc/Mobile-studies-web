import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

import { User } from '../user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  signupBtClick( newuser) {
    if (this.isPwdMatching(newuser) === false ||
        this.isAllFieldsFilled(newuser) === false) {
      newuser.displayMissingFieldMsg = true;
      return;
    }

    newuser.displayMissingFieldMsg = false;
    this.userService.insertNewUser(new User(newuser.username.value, newuser.pwd.value, newuser.email.value));
    this.router.navigate(['/login']);
  }

  isPwdMatching( newuser ) {
    if (newuser.pwd.value === newuser.pwdCheck.value) {
      newuser.displayPwdDoesNotMatch = false;
    }else {
      newuser.displayPwdDoesNotMatch = true;
    }
    return !newuser.displayPwdDoesNotMatch;
  }

  isAllFieldsFilled(newuser) {
    if (newuser.username.value === '' || newuser.email.value === '' ||
        newuser.pwd.value      === '' || newuser.pwdCheck.value === '' ) {
      return false;
    }
    return true;
  }
}
