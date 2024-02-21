import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ShopComponent } from './pages/shop/shop.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { WishlistComponent } from './pages/wishlist/wishlist.component';

export const routes: Routes = [

    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'shop',
        component: ShopComponent
    },
    {
        path: 'cart',
        component: CartComponent
    },
    {
        path: 'checkout',
        component: CheckoutComponent
    },
    {
      path: 'wishlist',
      component: WishlistComponent
  },
];
