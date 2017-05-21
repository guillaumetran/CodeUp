import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "./components/header/header.component";
import {SidebarComponent} from "./components/sidebar/sidebar.component";
import {RouterModule} from "@angular/router";
import {ClarityModule} from "clarity-angular";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ClarityModule
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    ClarityModule,
  ],
  declarations: [
    HeaderComponent,
    SidebarComponent
  ],
  providers: [
  ]
})
export class SharedModule { }
