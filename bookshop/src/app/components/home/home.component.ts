import { Component, OnInit } from '@angular/core';
import { LoginResponse, OidcSecurityService } from 'angular-auth-oidc-client';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isAuthenticated!: boolean;
  isSignInButtonDisabled = false; 

  constructor(public oidcSecurityService: OidcSecurityService, private router: Router) {}

  ngOnInit() {
    this.oidcSecurityService.checkAuth().subscribe((loginResponse: LoginResponse) => {
      this.isAuthenticated = loginResponse.isAuthenticated;

      if (this.isAuthenticated) {
        this.navigateToAddBook();
      }
    });
  }

  toggleAuth() {
    if (this.isAuthenticated) {
      this.logout();
    } else {
      this.login();
    }
  }

  login() {
    this.isSignInButtonDisabled = true;
    console.log('Login initiated. isSignInButtonDisabled:', this.isSignInButtonDisabled);
  
    this.oidcSecurityService.authorize();
  }
  

  logout() {
    this.oidcSecurityService.logoff().subscribe(result => {
      console.log(result);
      this.isAuthenticated = false;
    });
  }

  private navigateToAddBook() {
    this.router.navigate(['/add-book']);
  }
}
