import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { DescriptionComponent } from './description/description.component';
import { DetailComponent } from './detail/detail.component';
import { PolicyComponent } from './policy/policy.component';
import { ShippingFormComponent } from './shipping-form/shipping-form.component';

const appRoutes: Routes = [
    {
        path:'shipping_form',
        component:ShippingFormComponent,

    },
    {
        path: 'cart',
        component: CartComponent
    },
    {
        path: '',
        component: DescriptionComponent
    },
    {
        path: 'detail',
        component: DetailComponent
    },
    {
        path: 'description',
        component: DescriptionComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'policy',
        component: PolicyComponent
    }
];
export default appRoutes;