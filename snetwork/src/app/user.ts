export class User {
    id: number;
    username: string;
    pwd: string;
    email: string;
    myFriendList?: number[];

    constructor(
        username: string,
        pwd: string,
        email?: string) {

        this.email = email;
        this.username = username;
        this.pwd = pwd;

    }
}
