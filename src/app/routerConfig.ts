import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { CartComponent } from './cart/cart.component';
import { IndoorPlantsComponent } from './collection/indoor-plants/indoor-plants.component';
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
        path: 'detail/:name',
        component: DetailComponent
    },
   
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'shipping_policy',
        component: ShippingPolicyComponent
    },
    {
        path:'blog',
        component:BlogComponent
    },
    {
        path:'indoor-plants',
        component:IndoorPlantsComponent
    }
];
export default appRoutes;