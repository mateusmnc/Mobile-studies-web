export class FriendList {
    userID: number;
    friendIDs: number[];

    constructor(userID: number) {
        this.userID = userID;
    }
}
