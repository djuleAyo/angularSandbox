import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {

   posts = [];

  private postsSub: Subscription;

  constructor(
    private postService: PostService
  ) { }

  ngOnInit() {
    this.postService.getPosts();
    this.postsSub = this.postService.getPostUpdateListener()
      .subscribe((posts: Array<Post>) => {
        this.posts = posts;
      });
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }

  onDeletePost(postId: string) {
    this.postService.deletePost(postId);
  }
}
