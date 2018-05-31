import { Component,OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
//import { AlertService, AuthenticationService } from '../_services/index';
import { RouteConfigLoadStart, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  public navbarCollapsed = true;
 // constructor(private authenticationService:AuthenticationService,
 //             private router: Router,) { }

  logout(){
   // this.authenticationService.logout();
   // this.router.navigate(["/login"]);
  }
}
