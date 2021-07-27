import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataTypesComponent } from './data-types/data-types.component';
import { DirectivesComponent } from './directives/directives.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';

import { FormsModule } from '@angular/forms';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
@NgModule({
  declarations: [
    AppComponent,
    DataTypesComponent,
    DirectivesComponent,
    TwowaybindingComponent,
    EventbindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
