import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthModuleRoutingModule } from './auth-module-routing.module';
import { AuthModuleComponent } from './auth-module.component';


@NgModule({
  declarations: [AuthModuleComponent],
  imports: [
    CommonModule,
    AuthModuleRoutingModule
  ]
})
export class AuthModuleModule { }
