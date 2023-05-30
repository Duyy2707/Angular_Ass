import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNoteFoundComponent } from './pages/page-note-found/page-note-found.component';
import { ProductAddComponent } from './pages/product-add/product-add.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';
import { ProductUpdateComponent } from './pages/product-update/product-update.component';
import { HomePagewComponent } from './pages/home-pagew/home-pagew.component';


// decorators typescript
@NgModule({
  declarations: [
    AppComponent,
    PageNoteFoundComponent,
    ProductAddComponent,
    ProductListComponent,
    AdminLayoutComponent,
    BaseLayoutComponent,
    ProductUpdateComponent,
    HomePagewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
