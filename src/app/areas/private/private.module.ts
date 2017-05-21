import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PrivateRouting} from "./private.routing";
import {SharedModule} from "../../shared/shared.module";
import {FormsModule} from "@angular/forms";
import {PrivateComponent} from "./private.component";

@NgModule({
  imports: [
    CommonModule,
    PrivateRouting,
    SharedModule,
    FormsModule
  ],
  declarations: [
    PrivateComponent,
  ],
  providers: [
  ]
})
export class PrivateModule { }
