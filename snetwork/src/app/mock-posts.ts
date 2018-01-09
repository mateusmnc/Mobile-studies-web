import { Post } from './post';

export const POSTS: Post[] = [
    { postID: 1, userID: 1, text: '1º post, user 1, nicole, publico. Passei, férias!',
        date: new Date(2016, 12, 15), location: 'Porto Alegre', imagePath: '', privatePost: false, likes: [1, 2, 3, 4, 5] },
    { postID: 2, userID: 2, text: '1º post, user 2, Narcísio, privado. Já é fim de janeiro',
        date: new Date(2017, 1, 30), location: 'Porto Alegre', imagePath: '', privatePost: true, likes: [1, 2, 3, 4, 5] },
    { postID: 3, userID: 1, text: '2º post, user 1, Nicole, publico. Aniversário da vó hoje!',
        date: new Date(2017, 2, 10), location: 'São Leopoldo', imagePath: '', privatePost: false, likes: [1, 2, 3, 4, 5] },
    { postID: 4, userID: 3, text: '1º post, user 3, Boris, publico. Já é mês 6',
        date: new Date(2017, 6, 20), location: 'Alvorada', imagePath: '', privatePost: false, likes: [1, 2, 3, 4, 5, 6, 7, 8, 9] },
    { postID: 5, userID: 2, text: '2º post, user 2, Post publico. Tempo voa, já 2018',
        date: new Date(2018, 1, 10), location: 'Alvorada', imagePath: '', privatePost: false, likes: [1, 2, 3, 4, 5, 6, 7, 8, 9] }
];
