import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ShopComponent } from './pages/shop/shop.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { WishlistComponent } from './pages/wishlist/wishlist.component';
import { DefaultlayoutComponent } from './pages/defaultlayout/defaultlayout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomedashboardComponent } from './components/dashboard/homedashboard/homedashboard.component';
import { AddproductComponent } from './components/dashboard/addproduct/addproduct.component';
import { ListproductsComponent } from './components/dashboard/listproducts/listproducts.component';

export const routes: Routes = [
  {
    path: '',
    component: DefaultlayoutComponent,
    children: [
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
    ]
  },
  {
    path: 'admin',
    redirectTo: 'admin/home',
    pathMatch: 'full'
  },
  {
    path: 'admin',
    component: DashboardComponent,
    children: [
      {
        path: 'home',
        component: HomedashboardComponent
      },
      {
        path: 'addproduct',
        component: AddproductComponent
      },
      {
        path: 'products',
        component: ListproductsComponent
      },
    ]
  }
];
