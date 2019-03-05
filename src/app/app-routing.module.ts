import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { ListArticlesComponent } from './components/list-articles/list-articles.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/articles',
    pathMatch: 'full'
  },
  {
    path: 'articles',
    component: ListArticlesComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
