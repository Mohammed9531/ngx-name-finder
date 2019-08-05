// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './shared/modules/material/material.module';

// Components
import { HomeComponent } from './home/home.component';
import { FinderComponent } from './finder/finder.component';

/**
 * @routes
 * @constant
 */
const ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    path: 'home',
    component: HomeComponent,
    data: {
      bgClass: 'bg-white'
    }
  },
  {
    path: 'finder',
    component: FinderComponent
  }
];

/**
 * @author: Shoukath Mohammed
 */
@NgModule({
  declarations: [],
  imports: [
    NgbModule
    , CommonModule
    , MaterialModule
    , HttpClientModule
    , RouterModule.forRoot(ROUTES, { useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
