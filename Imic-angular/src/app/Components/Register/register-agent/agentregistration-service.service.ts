import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/Core/api.service';

/**
 *
 *Service class for AgentRegistration
 * @export
 * @class AgentregistrationServiceService used for connecting whenever a new agent gets registered
 */
@Injectable({
  providedIn: 'root'
})
export class AgentregistrationServiceService {
 private url="/register/agent";

  /**
   *Creates an instance of AgentregistrationServiceService.
   * @param {ApiService} api calling the cpommon api service for connection
   * @memberof AgentregistrationServiceService 
   */
  constructor(private api:ApiService) { }

 /**
  *
  *method for register agent
  * @param {FormGroup} register
  * @returns post the agent data
  * @memberof AgentregistrationServiceService
  */
 postData(register:FormGroup)
 {  console.log(register);
    return this.api.post(this.url,register);
 }


 
  }

