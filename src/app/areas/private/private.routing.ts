import {Routes, RouterModule} from "@angular/router";
import {PrivateComponent} from "./private.component";
import {ExercicesCComponent} from "./components/exercices/C/clang.component";
import {ExercicesComponent} from "./components/exercices/exercices.component";
import {ExerciceC1Component} from "./components/exercices/C/1/exercice-c1.component";

const privateRoutes: Routes = [
    {
        path: '',
        component: PrivateComponent,
        children: [
            {path: '', redirectTo: 'exercices', pathMatch: 'full'},
            {
              path: 'exercices',
              component: ExercicesComponent,
              children: [
                {path: '', redirectTo: 'C', pathMatch: 'full'},
                {
                  path: 'C',
                  component: ExercicesCComponent,
                  children: [
                    {path: '', redirectTo: 'C', pathMatch: 'full'},
                    {path: '1', component: ExerciceC1Component}
                  ]
                }
              ]
            },
        ]
    },
];

export const PrivateRouting = RouterModule.forChild(privateRoutes);
