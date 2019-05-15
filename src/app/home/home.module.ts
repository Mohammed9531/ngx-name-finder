import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from './../shared/modules/material/material.module';

/**
 * @routes
 * @constant
 */
const ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

/**
 * @author: Shoukath Mohammed
 */
@NgModule({
  imports: [
    CommonModule
    , MaterialModule
    , RouterModule.forChild(ROUTES)
  ],
  declarations: [HomeComponent],
  exports: [RouterModule]
})
export class HomeModule { }
