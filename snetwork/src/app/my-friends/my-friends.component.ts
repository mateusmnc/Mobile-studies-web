import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FriendList } from '../friendList';
import { USERS } from '../mock-users';

@Component({
  selector: 'app-my-friends',
  templateUrl: './my-friends.component.html',
  styleUrls: ['./my-friends.component.css']
})
export class MyFriendsComponent implements OnInit {
  currentUser: User;
  friendList: User[];

  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private userService: UserService) {

    if (this.authService.userIsLogged() === false) {
      return;
    }

    this.currentUser = this.authService.getLoggedUser();
    this.updateFriendList();

  }

  ngOnInit() {
    if (this.authService.userIsLogged() === false) {
      this.router.navigate(['/login']);
    }
  }
  updateFriendList() {
    const friendList: User[] = [];

    this.currentUser.myFriendList.forEach(function(friendID){
       friendList.push(this.userService.users.filter(user => user.id === friendID)[0]);
    }, this);

    this.friendList = friendList;
  }

  unfriend(friend: User) {
    this.currentUser.myFriendList = this.currentUser.myFriendList.filter(friendID => friendID !== friend.id);
    this.updateFriendList();
  }
}
