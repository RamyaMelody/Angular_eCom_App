import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Bootsnip1Component } from './bootsnip1/bootsnip1.component';
import { CategoryComponent } from './category/category.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProdviewComponent } from './prodview/prodview.component';
import { ProdListComponent } from './prod-list/prod-list.component';
import { ProdListDynamicComponent } from './prod-list-dynamic/prod-list-dynamic.component';
import { AboutComponent } from './about/about.component';
import { ProdCreateComponent } from './prod-create/prod-create.component';
import { ReactiveFormsModule, FormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { ProdListDBComponent } from './prod-list-db/prod-list-db.component';
import { ProdDelDBComponent } from './prod-del-db/prod-del-db.component';
import { ProdUpdateDbComponent } from './prod-update-db/prod-update-db.component';
import { ProdList1Component } from './prod-list1/prod-list1.component';
import { ProdList2Component } from './prod-list2/prod-list2.component';


@NgModule({
  declarations: [
    AppComponent,
    Bootsnip1Component,
    CategoryComponent,
    NavbarComponent,
    ProdviewComponent,
    ProdListComponent,
    ProdListDynamicComponent,
    AboutComponent,
    ProdCreateComponent,
    ProdListDBComponent,
    ProdDelDBComponent,
    ProdUpdateDbComponent,
    ProdList1Component,
    ProdList2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
