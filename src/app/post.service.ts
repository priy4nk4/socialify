import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private http: HttpClient) { }

  url = 'https://graph.facebook.com/me/feed?access_token=';
  userName: any;
  mail: any;
  profilePic: any;

    getPost(auth: any) {
        return this.http.get(this.url + auth);
    }
}
