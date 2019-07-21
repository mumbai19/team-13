import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { VendorHomeComponent } from '../../vendor-home/vendor-home.component';
import { RegisterFarmerComponent } from '../../register-farmer/register-farmer.component';
import { BuyerHomeComponent } from '../../buyer-home/buyer-home.component';
import { LoginComponent } from '../../login/login.component';
import { FarmerHomeComponent } from '../../farmer-home/farmer-home.component';
import { FarmerVideosComponent } from '../../farmer-videos/farmer-videos.component';
import { FarmerViewBuyersComponent } from '../../farmer-view-buyers/farmer-view-buyers.component';
import { FarmerDetailsComponent } from '../../farmer-details/farmer-details.component';
import { FarmerOrdersComponent } from '../../farmer-orders/farmer-orders.component';
import { ExpertComponent } from '../../expert/expert.component';
import { ExpertHomeComponent } from '../../expert-home/expert-home.component';
import { ExpertPortalComponent } from '../../expert-portal/expert-portal.component';


export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'register', component:RegisterFarmerComponent},
    { path: 'vendor-home',        component: VendorHomeComponent },
    { path: 'buyer-home',        component: BuyerHomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'farmer-home', component: FarmerHomeComponent },
    { path: 'farmer-videos', component: FarmerVideosComponent },
    { path: 'farmer-views-buyer', component: FarmerViewBuyersComponent },
    { path: 'farmer-details', component: FarmerDetailsComponent },
    { path: 'farmer-orders', component: FarmerOrdersComponent },
    { path: 'expert', component: ExpertComponent },
    { path: 'expert-home', component: ExpertHomeComponent },
    { path: 'expert-portal', component: ExpertPortalComponent },
];
