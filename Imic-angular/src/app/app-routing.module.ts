import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
<<<<<<< HEAD

import { AdminDashboardComponent } from './Components/Dashboard/admin-dashboard/admin-dashboard.component';
import { PolicyResolver } from './Core/policyresolver';
import { LoginComponent } from './Components/login/login.component';
import { RegisterAgentComponent } from './Components/register-agent/register-agent.component';
import { ContactusComponent } from './Components/contactus/contactus.component';
import { AgentDashboardComponent } from './Components/Dashboard/agent-dashboard/agent-dashboard.component';

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
    path:'login',
    component:LoginComponent
  },
  {
    path:'register-agent',
    component:RegisterAgentComponent
  },
  {
    path:'contact-us',
    component:ContactusComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
