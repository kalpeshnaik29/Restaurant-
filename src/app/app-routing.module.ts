import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddrestaurantComponent } from './addrestaurant/addrestaurant.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListrestaurantComponent } from './listrestaurant/listrestaurant.component';
import { ListuserComponent } from './listuser/listuser.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UpdaterestaurantComponent } from './updaterestaurant/updaterestaurant.component';

const routes: Routes = [
  {path:"dashboard", component:DashboardComponent},
  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent},
  {path:"listuser", component:ListuserComponent},
  {path:"listrestaurant", component:ListrestaurantComponent},
  {path:"addrestaurant", component:AddrestaurantComponent},
  {path:"updaterestaurant", component:UpdaterestaurantComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
