"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var UserManagementComponent = (function () {
    function UserManagementComponent() {
        this.userdata = [
            { id: 1, name: 'adam' },
            { id: 2, name: 'jone' },
            { id: 3, name: 'brown' }
        ];
    }
    UserManagementComponent = __decorate([
        core_1.Component({
            selector: 'user_management',
            template: "\n              <h1>User Management</h1>\n                  <ul>\n                    <li *ngFor=\"let v of userdata\"><a routerLink=\"../user_detail/{{v.id}}/{{v.name}}\">{{v.name}}</a></li>\n                  </ul>\n            "
        }), 
        __metadata('design:paramtypes', [])
    ], UserManagementComponent);
    return UserManagementComponent;
}());
exports.UserManagementComponent = UserManagementComponent;
//# sourceMappingURL=user_management.component.js.map