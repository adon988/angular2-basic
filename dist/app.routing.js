"use strict";
var router_1 = require('@angular/router');
var dashboard_component_1 = require('./dashboard.component');
var user_management_component_1 = require('./user_management.component');
var user_detail_component_1 = require('./user_detail.component');
var appRoutes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: 'user_management',
        component: user_management_component_1.UserManagementComponent
    },
    {
        path: 'user_detail/:id/:name',
        component: user_detail_component_1.UserDetailComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map