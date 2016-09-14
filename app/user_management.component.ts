import { Component } from '@angular/core';

@Component({
  selector: 'user_management',
  template: `
              <h1>User Management</h1>
                  <ul>
                    <li *ngFor="let v of userdata"><a routerLink="../user_detail/{{v.id}}/{{v.name}}">{{v.name}}</a></li>
                  </ul>
            `
})
export class UserManagementComponent {
  userdata = [
    {id:1, name:'adam'},
    {id:2, name:'jone'},
    {id:3, name:'brown'}
  ];

}