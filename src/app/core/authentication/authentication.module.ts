import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationComponent } from './authentication.component';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { MatCardModule } from '@angular/material/card';

@NgModule({
    imports: [
        CommonModule,
        AuthenticationRoutingModule,
        MatCardModule
    ],
    declarations: [
        AuthenticationComponent
    ]
})
export class AuthenticationModule { }
