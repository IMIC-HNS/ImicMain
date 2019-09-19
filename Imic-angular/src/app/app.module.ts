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
import { RegisterAgentComponent } from './Components/register-agent/register-agent.component';
import { ReactiveFormsModule } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';
import { RegisterPolicyholderComponent } from './Components/register-policyholder/register-policyholder.component';
import { LoginComponent } from './Components/login/login.component';
import { CommonModule } from '@angular/common';
import { ContactusComponent } from './Components/contactus/contactus.component';
import { AgentDashboardComponent } from './Components/Dashboard/agent-dashboard/agent-dashboard.component';

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
    AgentDashboardComponent
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
    FormsModule,
    HttpClientModule

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
