import './rxjs-operators';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { routing }   from './app.routing';
import { HttpModule, JsonpModule } from '@angular/http';

//component
import { AppComponent }   from './app.component';
import { DashboardComponent }   from './dashboard.component';
import { UserManagementComponent }   from './user_management.component';
import { UserDetailComponent }   from './user_detail.component';

//service
import { HttpService } from './http.service';


@NgModule({
  imports:      [ BrowserModule, FormsModule, routing , HttpModule],
  declarations: [ AppComponent, DashboardComponent, UserManagementComponent, UserDetailComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ HttpService ]
})
export class AppModule { }