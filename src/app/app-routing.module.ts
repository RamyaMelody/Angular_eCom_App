import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Bootsnip1Component } from './bootsnip1/bootsnip1.component';
import { CategoryComponent } from './category/category.component';
import { ProdviewComponent } from './prodview/prodview.component';
import { ProdListComponent } from './prod-list/prod-list.component';
import { AboutComponent } from './about/about.component';
import { ProdCreateComponent } from './prod-create/prod-create.component';
import { ProdListDBComponent } from './prod-list-db/prod-list-db.component';
import { ProdDelDBComponent } from './prod-del-db/prod-del-db.component';
import { ProdUpdateDbComponent } from './prod-update-db/prod-update-db.component';
import { ProdList1Component } from './prod-list1/prod-list1.component';
import { ProdList2Component } from './prod-list2/prod-list2.component';
import { RegisterComponent } from './register/register.component';
import { UserLoginComponent } from './user-login/user-login.component';


const routes: Routes = [
  {
    path:'',
    component: Bootsnip1Component
  },
  {
    path: 'about',
    component: AboutComponent

  },
  {
    path:'shop',
    component:  CategoryComponent
  },
  {
    path:'shop/:id',
    component:  ProdviewComponent
  },
  {
    path:'list/:id',
    component: ProdviewComponent
  },
  {
    path:'list1/:id',
    component: ProdviewComponent
  },
  {
    path:'list2/:id',
    component: ProdviewComponent
  },
  {
    path:'list',
    component: ProdListComponent
  },
  {
    path:'list1',
    component:ProdList1Component
  },
  {
    path:'list2',
    component:ProdList2Component
  },
  {
    path:'product/create',
    component: ProdCreateComponent
  },
  {
    path: 'product/list',
    component: ProdListDBComponent
  },
  {
    path:'product/delete',
    component:ProdDelDBComponent
  },
  {
    path: 'product/update',
    component: ProdUpdateDbComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'login',
    component:UserLoginComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
