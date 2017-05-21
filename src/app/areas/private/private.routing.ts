import {Routes, RouterModule} from "@angular/router";
import {PrivateComponent} from "./private.component";

const privateRoutes: Routes = [
    {
        path: '',
        component: PrivateComponent,
      canActivate: [],
      children: [
            {path: '', redirectTo: 'ressources', pathMatch: 'full'},
      ]
    }
];

export const PrivateRouting = RouterModule.forChild(privateRoutes);
