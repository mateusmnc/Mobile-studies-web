import { FriendList } from './friendList';

export const FRIENDLISTS: FriendList[] = [
  { userID: 1, friendIDs: [2, 4, 6, 8, 10] },
  { userID: 2, friendIDs: [1, 3, 5, 7, 9] },
  { userID: 3, friendIDs: [6, 9] },
  { userID: 4, friendIDs: [2, 8] },
  { userID: 5, friendIDs: [1, 2, 3, 7] },
  { userID: 6, friendIDs: [2, 3] },
  { userID: 7, friendIDs: [] }, // O 7 não tem amigos
  { userID: 8, friendIDs: [1, 2, 4] },
  { userID: 9, friendIDs: [3] },
  { userID: 10, friendIDs: [2, 5] }
];
