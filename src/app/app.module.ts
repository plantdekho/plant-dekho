import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DescriptionComponent } from './description/description.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DetailComponent } from './detail/detail.component';
import { RouterModule } from '@angular/router';
import appRoutes from './routerConfig';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { ShippingFormComponent } from './shipping-form/shipping-form.component';
import { ShippingPolicyComponent } from './shipping-policy/shipping-policy.component';
import { BlogComponent } from './blog/blog.component';
import { IndoorPlantsComponent } from './collection/indoor-plants/indoor-plants.component';



@NgModule({
  declarations: [
    AppComponent,
    DescriptionComponent,
    HeaderComponent,
    FooterComponent,
    DetailComponent,
    AboutComponent,
    CartComponent,
    ShippingFormComponent,
    ShippingPolicyComponent,
    BlogComponent,
   
    IndoorPlantsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes,{scrollPositionRestoration:'enabled'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
