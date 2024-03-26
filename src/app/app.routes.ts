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
import { OrderdetailsComponent } from './components/dashboard/orderdetails/orderdetails.component';
import { OrdersComponent } from './components/dashboard/orders/orders.component';
import { AddcategoryComponent } from './components/dashboard/addcategory/addcategory.component';
import { CategorysComponent } from './components/dashboard/categorys/categorys.component';
import { ProductdetailComponent } from './pages/productdetail/productdetail.component';

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
      {
        path: 'productdetail',
        component: ProductdetailComponent
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
        path: 'addcategory',
        component: AddcategoryComponent
      },
      {
        path: 'categorys',
        component: CategorysComponent
      },
      {
        path: 'addproduct',
        component: AddproductComponent
      },
      {
        path: 'products',
        component: ListproductsComponent
      },
      {
        path: 'orders',
        component: OrdersComponent
      },
      {
        path: 'orderdetails',
        component: OrderdetailsComponent
      },
    ]
  }
];
