import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeModuleRoutingModule } from './home-module-routing.module';
import { HomeModuleComponent } from './home-module.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeModuleComponent],
  imports: [
    FormsModule,
    CommonModule,
    HomeModuleRoutingModule
  ]
})
export class HomeModuleModule { }
