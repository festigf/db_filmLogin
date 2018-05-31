import { NgModule, APP_INITIALIZER } from '@angular/core';
import { LogoutService } from './logout.service';

export function iniLogout1(logoutService: LogoutService) {
    return () => logoutService.iniLogout1();
}


@NgModule({
  imports: [],
  providers: [
    LogoutService,
    { provide: APP_INITIALIZER, useFactory: iniLogout1, deps: [LogoutService], multi: true }
    
  ]
})
export class LogoutModule { }