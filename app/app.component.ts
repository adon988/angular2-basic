import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
              <h1>Router Test</h1>
              <ul>
                <li><a routerLink="/">Dashboard</a></li>
                <li><a routerLink="/user_management">User management</a></li>
              </ul>
              <router-outlet></router-outlet>
            `
})
export class AppComponent {}