import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {AppRouting} from "./app.routing";
import {PublicModule} from "./areas/public/public.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {PrivateModule} from "./areas/private/private.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    AppRouting,
    PrivateModule,
    PublicModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
