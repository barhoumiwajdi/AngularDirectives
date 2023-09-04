import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AreaComponent } from './Exercice/area/area.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserComponentComponent } from './Exercice/user-component/user-component.component';

@NgModule({
  declarations: [
    AppComponent,
    AreaComponent,
    UserComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
