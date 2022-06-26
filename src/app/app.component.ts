import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import {Post } from './post.model';
import { PostService } from './posts.service';
//import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PostService]
})
export class AppComponent implements OnInit {
  loadedPosts = [];
  isFetching = false;
  error: string = null;

  constructor( private http: HttpClient, private postService: PostService) {}

  ngOnInit() {
    // this.fetchPosts();
    //this.postService.getPostData();
    this.getData();
    this.postService.error.subscribe(message =>{
      this.error = message;
    });
  }

  onCreatePost(postData: Post) {
    // Send Http request
    this.postService.postData(postData);
    console.log(postData);
  }

  onFetchPosts() {
    this.getData();
    // Send Http request
    // this.fetchPosts();
  }

  getData() {
    this.isFetching = true;
    this.postService.getPostData().subscribe(posts => {
        this.isFetching = false;
      console.log("Posts", posts);
        this.loadedPosts = posts;
    }, error => {
      // this.error = error.message;
      this.postService.error.next(error.message);
    });
  }

  // private fetchPosts() {
  //   this.isFetching = true;
    
  // }

  onClearPosts() {
    // Send Http request
    this.postService.deletePosts().subscribe(() => {
      this.loadedPosts = [];
    })
  }
}
