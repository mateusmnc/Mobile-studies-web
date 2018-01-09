import { User } from './user';

export class Post {
    postID: number;
    userID: number;
    text: string;
    date: Date;
    location: string;
    imagePath: string;
    privatePost: boolean;
    likes: number[];

    constructor(text, location, imageSource, privatePost, user: User) {
        this.postID = 1;
        this.userID = user.id;

        this.text = text;
        this.date = new Date();
        this.location = location;
        this.imagePath = imageSource;
        this.privatePost = privatePost;
    }
}
