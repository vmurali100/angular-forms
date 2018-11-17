import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AreaChartsComponent } from './Components/area-charts/area-charts.component';
import { DatatablesComponent } from './Components/datatables/datatables.component';
import { IconsComponent } from './Components/icons/icons.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { ForgotpassComponent } from './Components/forgotpass/forgotpass.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';

const routes: Routes = [
  {path:'dashboard',component:DashboardComponent},
  {path:'charts',component:AreaChartsComponent},
  {path:'datatables',component:DatatablesComponent},
  {path:'icons',component:IconsComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'forgotpass',component:ForgotpassComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
