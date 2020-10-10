import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { 
    path: 'auth', 
    loadChildren: () => import('./auth-module/auth-module.module').then(m => m.AuthModuleModule) 
  }, 
  { 
    path: 'home', 
    loadChildren: () => import('./home-module/home-module.module').then(m => m.HomeModuleModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
