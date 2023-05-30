import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';
import { HomePagewComponent } from './pages/home-pagew/home-pagew.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductAddComponent } from './pages/product-add/product-add.component';
import { ProductUpdateComponent } from './pages/product-update/product-update.component';
import { PageNoteFoundComponent } from './pages/page-note-found/page-note-found.component';



const routes: Routes = [
 {path: "", component: BaseLayoutComponent, children:[
  {path:"", component: HomePagewComponent}
 ]
},
{path: "admin", component: BaseLayoutComponent, children:[
  {path: "", redirectTo: "product", pathMatch: "full"},
  {path:"product", component: ProductListComponent},
  {path:"product/add", component: ProductAddComponent},
  {path:"product/:id/edit", component: ProductUpdateComponent},

 ]
},
{path: "**", component: PageNoteFoundComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
