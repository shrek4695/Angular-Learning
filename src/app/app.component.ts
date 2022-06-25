import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import {Post } from './post.model';
//import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts = [];
  isFetching = false;

  constructor( private http: HttpClient) {}

  ngOnInit() {
    this.fetchPosts();
  }

  onCreatePost(postData: Post) {
    // Send Http request
    console.log(postData);
    this.http.post<{name:string}>('https://employee-management-syst-9e601-default-rtdb.firebaseio.com/post.json', postData).subscribe((responseData)=>{
      console.log("Response Data", responseData);
    });
  }

  onFetchPosts() {
    // Send Http request
    this.fetchPosts();
  }

  private fetchPosts() {
    this.isFetching = true;
    this.http.get<{[key:string]: Post}>('https://employee-management-syst-9e601-default-rtdb.firebaseio.com/post.json')
    .pipe(map((responseData: {[key:string]: Post}) => {
      const postArray: Post[] = [];
      for(const key in responseData) {
        if(responseData[key]) {
          postArray.push({...responseData[key], id: key})
        }
      }
      return postArray;
    }))
    .subscribe(posts => {
      this.isFetching = false;
      console.log("Posts", posts);
      this.loadedPosts = posts;
    });
  }

  onClearPosts() {
    // Send Http request
  }
}
