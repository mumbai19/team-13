import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
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


import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule
} from '@angular/material';
import { UserService } from '../../shared/services/user.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    VendorHomeComponent,
    RegisterFarmerComponent,
    BuyerHomeComponent,
    LoginComponent,
    FarmerHomeComponent,
    FarmerVideosComponent,
    FarmerViewBuyersComponent,
    FarmerOrdersComponent,
    FarmerDetailsComponent,
    ExpertComponent,
    ExpertHomeComponent,
    ExpertPortalComponent
    ],
  providers:[UserService]
})

export class AdminLayoutModule {}
