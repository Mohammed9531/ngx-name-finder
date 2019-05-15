// Modules
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './shared/modules/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FinderHttpModule } from './shared/modules/finder-http/finder-http.module';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FinderComponent } from './finder/finder.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { SpinnerComponent } from './shared/components/spinner/spinner.component';

/**
 * @author: Shoukath Mohammed
 */
@NgModule({
  declarations: [
    AppComponent
    , HomeComponent
    , FinderComponent
    , HeaderComponent
    , SpinnerComponent
  ],
  imports: [
    NgbModule
    , BrowserModule
    , MaterialModule
    , AppRoutingModule
    , BrowserAnimationsModule
    , FinderHttpModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
