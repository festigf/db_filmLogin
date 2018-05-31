import { Component,OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RouteConfigLoadStart, Router } from '@angular/router';
import { AuthenticationService } from '../_services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  public navbarCollapsed = true;
  constructor(private authenticationService:AuthenticationService,
              private router: Router,) { }
  logout(){
    this.authenticationService.logout();
    this.router.navigate(["/"]);

  }

}
