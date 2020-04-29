import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';
import { LocationComponent } from '../location/location.component';
import { ServicesComponent } from '../services/services.component';
import { TransferPrescriptionComponent } from '../transfer-prescription/transfer-prescription.component';
import { RefillRequestComponent } from  '../refill-request/refill-request.component';
import { PriceCheckComponent } from '../price-check/price-check.component';
import { InformationComponent } from '../information/information.component';
import { AboutUsComponent } from '../about-us/about-us.component';
import { CareerComponent } from '../career/career.component';
import { FranchiseeComponent } from '../franchisee/franchisee.component';
import { SpecialityCompoundingComponent } from '../speciality-compounding/speciality-compounding.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { HomePageComponent } from '../home-page/home-page.component';
import { LocationDetailComponent } from '../location-detail/location-detail.component';

import { HomePageRoutingModule } from './home-routing.module';
import { from } from 'rxjs';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage,
        children: [
          {
            path: '',
            redirectTo: 'home-page',
            pathMatch: 'full'
          },
          {
            path: 'home-page',
            component: HomePageComponent
          },
          {
            path: 'location',
            component: LocationComponent
          },
          {
            path: 'service',
            component: ServicesComponent
          },
          {
            path: 'tranfer-prescription',
            component: TransferPrescriptionComponent
          },
          {
            path: 'refill-request',
            component: RefillRequestComponent
          },
          {
            path: 'price-check',
            component: PriceCheckComponent
          },
          {
            path: 'information',
            component: InformationComponent
          },
          {
            path: 'about-us',
            component: AboutUsComponent
          },
          {
            path: 'career',
            component: CareerComponent
          },
          {
            path: 'franchisee',
            component: FranchiseeComponent
          },
          {
            path: 'speciality-compounding',
            component: SpecialityCompoundingComponent
          },
          {
            path: 'contact-us',
            component: ContactUsComponent
          },
          {
            path: 'location-detail',
            component: LocationDetailComponent
          },
         
        ]
      },

    ])
  ],
  declarations: [
    HomePage,
    LocationComponent,
    ServicesComponent,
    TransferPrescriptionComponent,
    RefillRequestComponent,
    PriceCheckComponent,
    InformationComponent,
    AboutUsComponent,
    CareerComponent,
    FranchiseeComponent,
    SpecialityCompoundingComponent,
    ContactUsComponent,
    HomePageComponent,
    LocationDetailComponent,
    
  ]
})
export class HomePageModule { }
