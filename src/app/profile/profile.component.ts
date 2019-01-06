import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'angularx-social-login';
import { PostService } from '../post.service';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [ AuthService]
})
export class ProfileComponent implements OnInit {
  postDetails: any;
  @Input() authKey: any;

  constructor(private  authService: AuthService,
    private  postService: PostService,
    private route: ActivatedRoute) { }

  ngOnInit() {
        this.postService.getPost(this.authKey).subscribe(info => {
          this.postDetails = info.data ;
      });
  }
  signOut(): void {
    this.authService.signOut();
    window.location.reload();
    }

}
