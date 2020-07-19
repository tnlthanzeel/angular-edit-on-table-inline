import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  domains = [];
  isVisible : boolean = false;
  constructor(){
      this.domains = [
    {
      "_id" : "12323vdfvd234",
      "name" : "sixlogs.com",
      "reg_date" : "2018-04-04",
      "editable": false
    },
    {
      "_id" : "12323vdfvd234",
      "name" : "avanza.com",
      "reg_date" : "2019-04-04",
      "editable": false
    },
    {
      "_id" : "12323vdfvd234",
      "name" : "tps.com",
      "reg_date" : "2018-04-04",
      "editable": false
    },
    {
      "_id" : "12323vdfvd234",
      "name" : "utf.com",
      "reg_date" : "2019-04-04",
      "editable": false
    }
  ]
}

editDomain(domain: any){
    domain.editable = !domain.editable;
  }

  update(domain){
console.log(domain);
 domain.editable = !domain.editable;
  }
}
