import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ListuserComponent } from './listuser/listuser.component';
import { ListrestaurantComponent } from './listrestaurant/listrestaurant.component';
import { AddrestaurantComponent } from './addrestaurant/addrestaurant.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UpdaterestaurantComponent } from './updaterestaurant/updaterestaurant.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ListuserComponent,
    ListrestaurantComponent,
    AddrestaurantComponent,
    DashboardComponent,
    UpdaterestaurantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
