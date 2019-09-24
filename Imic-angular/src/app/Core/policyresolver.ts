import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonService } from './common.service';
import { Injectable } from '@angular/core';

@Injectable()
export class PolicyResolver implements Resolve<any> {
    constructor(private commonService: CommonService) {

    }
    resolve(route: ActivatedRouteSnapshot) : Promise<any>{
        return this.commonService.getPolicies();
    }
    
}