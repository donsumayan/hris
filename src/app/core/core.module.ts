import { NgModule } from '@angular/core';
import { AuthenticationModule } from './authentication/authentication.module';
import { UserService } from './services/user.service';

@NgModule({
    imports: [
        AuthenticationModule
    ],
    providers: [
        UserService
  ]
})
export class CoreModule { }
