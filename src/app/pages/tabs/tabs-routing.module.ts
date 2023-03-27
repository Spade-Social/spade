import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      { path: '',pathMatch: 'full', redirectTo: 'dashboard' },
      {
        path: 'dashboard',
        loadChildren: () => import('./../dashboard/dashboard.module').then( m => m.DashboardPageModule)
      },
      {
        path: 'messages',
        loadChildren: () => import('./../messages/messages.module').then( m => m.MessagesPageModule)
      },
      {
        path: 'discover',
        loadChildren: () => import('./../discover/discover.module').then( m => m.DiscoverPageModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('./../settings/settings.module').then( m => m.SettingsPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('./../profile/profile.module').then( m => m.ProfilePageModule)
      },
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
