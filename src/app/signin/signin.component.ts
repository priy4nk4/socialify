import { Component, OnInit } from '@angular/core';
import { AuthService } from 'angularx-social-login';
import { FacebookLoginProvider } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import { PostService } from '../post.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  providers: [ AuthService, PostService ]
})
export class SigninComponent implements OnInit {

  private user: SocialUser;
  private loggedIn: boolean;
  authToken: any;
  constructor(private  authService: AuthService,
    private  postService: PostService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    if (this.user) {
      this.signInWithFB();
    }
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    this.authService.authState.subscribe((user) => {
      console.log('user>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>', user);
      this.authToken = user.authToken;
      this.user = user;
      this.loggedIn = (user != null);
    });
  }

  signOut(): void {
    this.authService.signOut();
  }

}
