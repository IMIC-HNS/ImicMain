import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Core/header/header.component';
import { HomeComponent } from './Components/home/home.component';
import { HttpClientModule} from '@angular/common/http';
import { AdminDashboardComponent } from './Components/Dashboard/admin-dashboard/admin-dashboard.component';
import { PolicyResolver } from './Core/policyresolver';
import { RegisterAgentComponent } from './Components/Register/register-agent/register-agent.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterPolicyholderComponent } from './Components/Register/register-policyholder/register-policyholder.component';
import { LoginComponent } from './Components/login/login.component';
import { CommonModule } from '@angular/common';
import { ContactusComponent } from './Components/contactus/contactus.component';
import { PolicyRequestComponent } from './Components/policy-request/policy-request.component';
import { AgentDashboardComponent } from './Components/Dashboard/agent-dashboard/agent-dashboard.component';
import { PolicyholderDashboardComponent } from './Components/Dashboard/policyholder-dashboard/policyholder-dashboard.component';
import { ProfileComponent } from './Components/Dashboard/profile/profile.component';
import { NavbarComponent } from './Core/navbar/navbar.component';
import { PolicyHoldersComponent } from './Components/Dashboard/agent-dashboard/policy-holders/policy-holders.component';
import { AdminSidebarComponent } from './Components/admin-sidebar/admin-sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AdminDashboardComponent,
    RegisterAgentComponent,
    RegisterPolicyholderComponent,
    LoginComponent,
    ContactusComponent,
    PolicyRequestComponent,
    AgentDashboardComponent,
    PolicyholderDashboardComponent,
    ProfileComponent,
    NavbarComponent,
    PolicyHoldersComponent,
    AdminSidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule ,
    FormsModule
  ],   
  providers: [
    PolicyResolver,
    CommonModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
