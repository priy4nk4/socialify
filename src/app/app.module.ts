import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SocialLoginModule, AuthServiceConfig, LoginOpt } from 'angularx-social-login';
import { FacebookLoginProvider } from 'angularx-social-login';
import { SigninComponent } from './signin/signin.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';

const fbLoginOptions: LoginOpt = {
  scope: 'user_posts',
  return_scopes: true,
  enable_profile_selector: true
};

const config = new AuthServiceConfig([
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('309871112978021', fbLoginOptions)
  }]);

export function provideConfig() {
  return config;
}

const appRoutes: Routes = [
  { path: '', component: SigninComponent },
  {path: 'profile', component: ProfileComponent}];

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    ProfileComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{
    provide: AuthServiceConfig,
    useFactory: provideConfig
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
