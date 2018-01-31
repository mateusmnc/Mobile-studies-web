import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { AuthenticationService } from '../authentication.service';
import { Observable } from 'rxjs/Observable';
import { Post } from '../post';
import { User } from '../user';
import { FriendListService } from '../friend-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  feedPosts: Post[];
  currentUser: User;

  constructor(private router: Router,
              private postService: PostService,
              private authService: AuthenticationService,
              private friendListService: FriendListService) {

    if (this.authService.userIsLogged() === false) {
      return;
    }

    this.currentUser = this.authService.getLoggedUser();
    this.currentUser.myFriendList = this.friendListService.getUserFriendList(this.currentUser);
    this.feedPosts = this.postService.getFeedPosts(this.currentUser);
  }

  ngOnInit() {
    if (this.authService.userIsLogged() === false) {
      this.router.navigate(['/login']);
    }
  }

  post(newpost) {
    this.postService.insertNewPost(
      this.authService.getLoggedUser(),
      newpost.text.value,
      newpost.location.value,
      newpost.image.src,
      newpost.privatePost.checked);
    this.feedPosts = this.postService.getFeedPosts(this.currentUser);
  }

  fileChanged(pic: HTMLSelectElement, image: HTMLImageElement) {
    image.src = pic.value;
  }

  share(post: Post) {
    console.log('antes de atualizar: ');
    console.log(post);
    post.date = new Date();
    post.userID = this.authService.getLoggedUser().id;
    console.log('após atualizar: ');
    console.log(post);
  }
}
