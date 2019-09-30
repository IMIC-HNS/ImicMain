import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/Core/api.service';

@Injectable({
  providedIn: 'root'
})
export class AgentregistrationServiceService {
 private url="/register/agent";
  constructor(private _http: HttpClient,private api:ApiService) { }

 postData(register:FormGroup)
 {  console.log(register);
    return this.api.post(this.url,register);
 }


 
  }

