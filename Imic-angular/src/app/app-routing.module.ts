import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';


import { AdminDashboardComponent } from './Components/Dashboard/admin-dashboard/admin-dashboard.component';
import { PolicyResolver } from './Core/policyresolver';
import { LoginComponent } from './Components/login/login.component';
import { RegisterAgentComponent } from './Components/Register/register-agent/register-agent.component';
import { RegisterPolicyholderComponent } from "./Components/Register/register-policyholder/register-policyholder.component";
import { ContactusComponent } from './Components/contactus/contactus.component';

import { PolicyRequestComponent } from './Components/policy-request/policy-request.component';

import { AgentDashboardComponent } from './Components/Dashboard/agent-dashboard/agent-dashboard.component';
import { PolicyholderDashboardComponent } from './Components/Dashboard/policyholder-dashboard/policyholder-dashboard.component';
import { ProfileComponent } from './Components/Dashboard/profile/profile.component';


const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
{
    path:'home',
    component:HomeComponent,
    resolve: {
      status: PolicyResolver
    }
  },
  {
    path:'register-agent',
    component:RegisterAgentComponent
  },
  {
    path:'admin-dashboard',
    component:AdminDashboardComponent
  },
  {
    path:'agent-dashboard',
    component:AgentDashboardComponent
  },
  {
    path:'policyholder-dashboard',
    component:PolicyholderDashboardComponent
  },
  {
    path:'profile',
    component:ProfileComponent
  },
  {
    path:'login',
    component:LoginComponent,
  },
  {
    path:'register-agent',
    component:RegisterAgentComponent
  },
  {
    path:'contact-us',
    component:ContactusComponent

  },
  {

    path:'policy-request',
    component:PolicyRequestComponent
  },
  {
    path:'registerpolicyholder/:id',
    component:RegisterPolicyholderComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
