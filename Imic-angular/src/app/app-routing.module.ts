import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';

import { AdminDashboardComponent } from './Components/admin-dashboard/admin-dashboard.component';
import { PolicyResolver } from './Core/policyresolver';

import { LoginComponent } from './Components/login/login.component';
import { RegisterAgentComponent } from './Components/register-agent/register-agent.component';
import { RegisterPolicyholderComponent } from "./Components/register-policyholder/register-policyholder.component";
import { ContactusComponent } from './Components/contactus/contactus.component';

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
    path:'login',
    component:LoginComponent
  },
  {
    path:'registeragent',
    component:RegisterAgentComponent
  },
  {
    path:'contactus',
    component:ContactusComponent

  },
  {
    path:'registerpolicyholder',
    component:RegisterPolicyholderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
