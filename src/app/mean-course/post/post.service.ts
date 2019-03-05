import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private posts: Array<Post> = [];

  private postsUpdated = new Subject<Array<Post>>();

  constructor(
    private http: HttpClient
  ) { }

  getPosts() {
    this.http.get<{message: string, posts: any}>(
      'http://localhost:3000/api/posts'
    )
    .pipe(map((postData) => {
      return postData.posts.map(post => {
        return {
          title: post.title,
          content: post.content,
          id: post._id
        };
      });
    }))
    .subscribe(res => {
      this.posts = res;
      this.postsUpdated.next([...this.posts]);
    });
  }

  addPost(title: string, content: string) {
    const post: Post = {id: undefined, title, content};

    this.http.post('http://localhost:3000/api/post', post)
      .subscribe((res: any) => {
        post.id = res.postId;
        this.posts.push(post);
        this.postsUpdated.next([...this.posts]);
      });
  }
  deletePost(postId: string) {
    this.http.delete(`http://localhost:3000/api/post/${postId}`)
    .subscribe(() => {
      const updatedPosts = this.posts.filter(post => post.id !== postId);
      this.posts = updatedPosts;
      this.postsUpdated.next(this.posts);
    });
  }

  getPostUpdateListener() {
    return this.postsUpdated;
  }
}
