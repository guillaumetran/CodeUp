import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PrivateRouting} from "./private.routing";
import {SharedModule} from "../../shared/shared.module";
import {FormsModule} from "@angular/forms";
import {PrivateComponent} from "./private.component";
import {ExercicesCComponent} from "./components/exercices/C/clang.component";
import {ExercicesSidebarComponent} from "./components/exercices/sidebar/sidebar.component";
import {ExercicesComponent} from "./components/exercices/exercices.component";
import {ExerciceC1Component} from "./components/exercices/C/1/exercice-c1.component";

@NgModule({
  imports: [
    CommonModule,
    PrivateRouting,
    SharedModule,
    FormsModule
  ],
  declarations: [
    PrivateComponent,
    ExercicesComponent,
    ExercicesCComponent,
    ExercicesSidebarComponent,
    ExerciceC1Component
  ],
  providers: [
  ]
})
export class PrivateModule { }
