import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    children: [
        {
            path: '',
            loadChildren: () => import('../pages/discover/discover.module').then(m => m.DiscoverPageModule)
        },
    ]
  }];
  @NgModule({
    imports: [RouterModule.forChild(routes)],
  })
  export class HomeRouter {}