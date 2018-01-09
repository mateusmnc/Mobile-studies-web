import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FriendList } from './friendList';
import { FRIENDLISTS } from './mock-friend-lists';
import { of } from 'rxjs/observable/of';
import { User } from './user';

@Injectable()
export class FriendListService {
  friendList: FriendList[];

  getFriendList(): Observable<FriendList[]> {
    return of(FRIENDLISTS);
  }

  constructor() {
    this.getFriendList().subscribe(friendList => this.friendList = friendList);
  }

  getUserFriendList(user: User): number[] {
    return this.friendList.find(friendList => friendList.userID === user.id).friendIDs;
  }

  addFriendToUserFriendList(user: User, newFriendID: number) {
    console.log(this.friendList);
    FRIENDLISTS.find(friendList => friendList.userID === user.id).friendIDs.push(newFriendID);
    this.getFriendList().subscribe(friendList => this.friendList = friendList);
    console.log(this.friendList);
  }
}
