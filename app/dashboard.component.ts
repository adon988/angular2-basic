import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject }           from 'rxjs/Subject';
import { HttpService } from './http.service';
@Component({
  selector: 'my-dashboard',
  template: `
              <h2>My Service</h2> <button (click)="testSearch()">Search</button> <span>{{getData}}</span>
            `,
  providers: [ HttpService ]
})
export class DashboardComponent implements OnInit{
  constructor(private _HttpService: HttpService, private router: Router) { }  

  getData: string;
  postData:string;

  testSearch() : void {
    this._HttpService.startSearch(`http://date.jsontest.com`)
        .then(
          data => this.getData = JSON.stringify(data),
          error => alert(error),
          ()=>console.log('finish')
        );
  }

}