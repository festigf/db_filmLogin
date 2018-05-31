﻿import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlertService, AuthenticationService } from '../_services/index';
import {User } from '../../Types_dbfilm/User';

@Component({
    //moduleId: module.id.toString(),
    selector: 'login',
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;
    userForm: FormGroup;
    user:User;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService) { }

        //,private alertService: AlertService

    ngOnInit() {
        // reset login status
        this.authenticationService.logout();
        this.userForm = new FormGroup({
            Username: new FormControl("user1",Validators.required),
            Password: new FormControl('user1',Validators.required)
          });
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        //this.userForm.setValue({
        //    'username':"user1",
        //    'password':"user1" });

    }
/*   login() {
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    //this.alertService.error(error);
                    console.log("error login:"+error)
                    this.loading = false;
                });
    
    
    }*/


    onSubmit(formValue: User){
        console.log(formValue.Username);
        console.log(this.userForm.value);
        this.authenticationService.login(this.userForm.value)
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    //this.alertService.error(error);
                    console.log("error login:"+error)
                    this.loading = false;
                });
        /* console.log(this.attoreForm.value);
         this.sd.modInsAttore(this.attoreForm.value)
         .subscribe(res => {
           if (res.status==200)
             { console.log("emit");
               this.onEditSave.emit(this.attoreForm.value);
             }
           }
       );*/
       }    
    

}