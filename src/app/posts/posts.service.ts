import { Post } from './post.model';

export class PostsService {
  posts : Post[] =[];

  getPosts() {
    return [...this.posts];
  }

}
