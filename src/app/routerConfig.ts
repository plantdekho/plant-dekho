import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { DescriptionComponent } from './description/description.component';
import { DetailComponent } from './detail/detail.component';

import { ShippingFormComponent } from './shipping-form/shipping-form.component';
import { ShippingPolicyComponent } from './shipping-policy/shipping-policy.component';

const appRoutes: Routes = [
    {
        path: '',
        component: DescriptionComponent
    },
    {
        path:'shipping_form',
        component:ShippingFormComponent,

    },
    {
        path: 'cart',
        component: CartComponent
    },
   
    {
        path: 'detail',
        component: DetailComponent
    },
   
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'shipping_policy',
        component: ShippingPolicyComponent
    }
];
export default appRoutes;