import { Component, onInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'user_detail',
  template: `
              <h1>User Detail</h1>
              ID: {{id}}, Name: {{name}}
            `
})
export class UserDetailComponent implements onInit, OnDestroy {

  constructor(
    private route: ActivatedRoute
  ){}

  id = this.route.params._value.id;
  name = this.route.params._value.name;

}