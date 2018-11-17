import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconsComponent } from './Components/icons/icons.component';
import { AreaChartsComponent } from './Components/area-charts/area-charts.component';
import { DatatablesComponent } from './Components/datatables/datatables.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ScrollTopComponent } from './Components/scroll-top/scroll-top.component';
import { LogoutModalComponent } from './Components/logout-modal/logout-modal.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { ForgotpassComponent } from './Components/forgotpass/forgotpass.component';
import { NavComponent } from './Components/nav/nav.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    IconsComponent,
    AreaChartsComponent,
    DatatablesComponent,
    FooterComponent,
    ScrollTopComponent,
    LogoutModalComponent,
    LoginComponent,
    RegisterComponent,
    ForgotpassComponent,
    NavComponent,
    SidebarComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
