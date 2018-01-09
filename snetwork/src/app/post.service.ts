import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Post } from './post';
import { of } from 'rxjs/observable/of';
import { POSTS } from './mock-posts';
import { User } from './user';

@Injectable()
export class PostService {
  static nextID: number;
  posts: Post[];

  constructor() {
    this.getPosts().subscribe(posts => this.posts = posts);
    PostService.nextID = this.posts.length + 1;
  }

  getPosts(): Observable<Post[]> {
    return of(POSTS);
  }

  insertNewPost(user: User, text: string, location: string, imageSource: string, privatePost: boolean) {
    const post = new Post(text, location, imageSource, privatePost, user);
    post.postID = PostService.nextID;
    POSTS.push(post);
    PostService.nextID = PostService.nextID + 1;
    this.getPosts().subscribe(posts => this.posts = posts);
  }

  getFeedPosts(user: User): Post[] {
    this.getPosts().subscribe(posts => this.posts = posts);
    let feedPost: Post[] = this.posts.filter(post => post.userID === user.id);

    user.myFriendList.forEach(function (friend){
      feedPost = feedPost.concat(this.posts.filter(friendPost => friendPost.userID === friend));
    }, this);

    feedPost.sort(function(postA, postB){
      if (postA.date.getFullYear() !== postB.date.getFullYear()) {
        return postB.date.getFullYear() - postA.date.getFullYear();
      }
      if (postA.date.getMonth() !== postB.date.getMonth()) {
        return postB.date.getMonth() - postA.date.getMonth();
      }
      return postB.date.getDate() - postA.date.getDate();
    });
    return feedPost;
  }

}
