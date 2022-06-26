import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from '@angular/common/http';
import {Post} from './post.model';
import {map, tap, throwError} from 'rxjs';
import { Injectable } from '@angular/core';
import { Subject, catchError } from 'rxjs';

@Injectable()

export class PostService {

    error = new Subject<string>();

    constructor(private http: HttpClient) {}

    postData(postData: Post) {
        this.http.post<{name:string}>('https://employee-management-syst-9e601-default-rtdb.firebaseio.com/post.json', postData, {
            observe: 'body',
            // responseType: 'text'
        }).subscribe((responseData)=>{
            console.log("Response Data", responseData);
        }, error =>{
            this.error.next(error.message);
        });
    }

    getPostData() {
        return this.http.get<{ [key: string]: Post }>('https://employee-management-syst-9e601-default-rtdb.firebaseio.com/post.json', {
                headers: new HttpHeaders({
                    "custom-header": "Hello"
                }),
                params: new HttpParams().set('print', 'pretty')
        }).pipe(map((responseData: { [key: string]: Post }) => {
                const postArray: Post[] = [];
                for (const key in responseData) {
                    if (responseData[key]) {
                        postArray.push({ ...responseData[key], id: key })
                    }
                }
                return postArray;
            }), catchError(errorResponse =>{
                return throwError(errorResponse);
            })
            );
            // .subscribe(posts => {
            //     //   this.isFetching = false;
            //     console.log("Posts", posts);
            //     //   this.loadedPosts = posts;
            // });
    }

    deletePosts() {
        return this.http.delete('https://employee-management-syst-9e601-default-rtdb.firebaseio.com/post.json', {
            observe: 'events',
            responseType: 'text'
        }).pipe(tap(event => {
            console.log(event)
            if(event.type == HttpEventType.Response) {
                console.log("Event body", event.body)
            }
        }));
    }
}