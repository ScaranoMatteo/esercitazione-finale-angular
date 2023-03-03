import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MaterialModule } from './material.module';


import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';


import { AppRoutingModule } from './app-routing.module';
import { MainNavComponent } from './main-nav/main-nav.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    AddComponent,

    ListComponent,
    
    
    MainNavComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MaterialModule,


    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
