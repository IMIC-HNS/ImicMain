import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Core/api.service';
import { RegisterPolicyholder } from 'src/app/Components/Register/register-policyholder/register-policyholder';

@Component({
  selector: 'app-claim-request',
  templateUrl: './claim-request.component.html',
  styleUrls: ['./claim-request.component.css']
})
export class ClaimRequestComponent implements OnInit {

  policyHolders:Object=[];
  claimUrl="/policyholder/claimed";
  decideClaim='/policyholder/claim/';
  constructor(private api:ApiService) { }
  
  ngOnInit() {
    this.api.get(this.claimUrl).subscribe(
      response=>this.policyHolders=response,
      erro=>console.log(erro)
    )
  }
approval(holder){
  holder.claim.status="APPROVED";
  this.api.post(this.decideClaim+holder.id,holder.claim).subscribe(
    response=>alert("The Policy Holder's claim has been approved\n The Amount Approved is: "+holder.claim.amount),
    error=>console.log(error)
  )
}
reject(holder){
  holder.claim.status="REJECTED";
  this.api.post(this.decideClaim+holder.id,holder.claim).subscribe(
    response=>alert("The Policy Holder's claim request has been rejected"),
    error=>console.log(error)
  )
}
viewDoc(holder){
  this.api.download(this.decideClaim+holder.id).subscribe(
    (response) => {
  
  var blob = new Blob([response], {type:'application/pdf'});
  var url = URL.createObjectURL(blob);
  window.open(url,'_blank');
    }, error=>console.log(error) );
}
}
