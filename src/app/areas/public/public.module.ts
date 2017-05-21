import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PublicRouting} from "./public.routing";
import {PublicComponent} from "./public.component";
import {LoginComponent} from "./pages/login/login.component";
import {RegisterComponent} from "./pages/register/register.component";
import {PageNotFoundComponent} from "./pages/page-not-found/page-not-found.component";

@NgModule({
  imports: [
    CommonModule,
    PublicRouting,
  ],
  declarations: [
    PublicComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent
  ]
})
export class PublicModule { }
