import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { UserService } from '../user.service';
import { USERS } from '../mock-users';

@Component({
  selector: 'app-maybe-you-know',
  templateUrl: './maybe-you-know.component.html',
  styleUrls: ['./maybe-you-know.component.css']
})
export class MaybeYouKnowComponent implements OnInit {
  maybeYouKnowList: User[];
  currentUser: User;

  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private userService: UserService) {

    if (this.authService.userIsLogged() === false) {
      return;
    }

    this.currentUser = this.authService.getLoggedUser();
    this.updateMaybeYouKnowList();
  }

  ngOnInit() {
  }

  updateMaybeYouKnowList() {
    let maybeYouKnowList: User[] = this.userService.users.filter(user => user.id !== this.currentUser.id);

    this.currentUser.myFriendList.forEach(function(friendID){
      maybeYouKnowList = maybeYouKnowList.filter(user => user.id !== friendID);
    });

    this.maybeYouKnowList = maybeYouKnowList;
  }

  addFriend(maybeYouKnowUser: User) {
    console.log(USERS);
    this.currentUser.myFriendList.push(maybeYouKnowUser.id);
    this.updateMaybeYouKnowList();
    console.log(USERS);
  }
}
