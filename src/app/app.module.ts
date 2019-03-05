import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ListArticlesComponent } from './components/list-articles/list-articles.component';
import { FormArticlesComponent } from './components/form-articles/form-articles.component';
import { NavigationComponent } from './components/navigation/navigation.component';

import { ArticulosService } from './services/articulos.service';



@NgModule({
  declarations: [
    AppComponent,
    ListArticlesComponent,
    FormArticlesComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ArticulosService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
