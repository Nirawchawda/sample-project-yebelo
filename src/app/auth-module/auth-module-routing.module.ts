import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthModuleComponent } from './auth-module.component';

const routes: Routes = [{ path: '', component: AuthModuleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthModuleRoutingModule { }
