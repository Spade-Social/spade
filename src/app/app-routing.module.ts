import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./splashscreen/splashscreen.module').then( m => m.SplashscreenPageModule)
  },
  {
    path: 'index',
    loadChildren: () => import('./index/index.module').then(m => m.IndexPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },

  {
    path: 'bodybuild',
    loadChildren: () => import('./pages/bodybuild/bodybuild.module').then( m => m.BodybuildPageModule)
  },
  {
    path: 'relationshiptrait',
    loadChildren: () => import('./pages/relationshiptrait/relationshiptrait.module').then( m => m.RelationshiptraitPageModule)
  },
  {
    path: 'ethnicity',
    loadChildren: () => import('./pages/ethnicity/ethnicity.module').then( m => m.EthnicityPageModule)
  },
  {
    path: 'onboardingnav',
    loadChildren: () => import('./pages/onboardingnav/onboardingnav.module').then( m => m.OnboardingnavPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'reg',
    loadChildren: () => import('./pages/reg/reg.module').then( m => m.RegPageModule)
  },
  {
    path: 'lovelanguagequiz',
    loadChildren: () => import('./pages/lovelanguagequiz/lovelanguagequiz.module').then( m => m.LovelanguagequizPageModule)
  },
  {
    path: 'personalitytest',
    loadChildren: () => import('./pages/personalitytest/personalitytest.module').then( m => m.PersonalitytestPageModule)
  },
  {
    path: 'single',
    loadChildren: () => import('./pages/section/single/single.module').then( m => m.SinglePageModule)
  },
  {
    path: 'single',
    loadChildren: () => import('./model/single/single.module').then( m => m.SinglePageModule)
  },
  {
    path: 'redlight',
    loadChildren: () => import('./model/redlight/redlight.module').then( m => m.RedlightPageModule)
  },
  {
    path: 'longterm',
    loadChildren: () => import('./model/longterm/longterm.module').then( m => m.LongtermPageModule)
  },
  {
    path: 'friendzone',
    loadChildren: () => import('./model/friendzone/friendzone.module').then( m => m.FriendzonePageModule)
  },
  {
    path: 'questions',
    loadChildren: () => import('./model/questions/questions.module').then( m => m.QuestionsPageModule)
  },
  {
    path: 'personalitytest',
    loadChildren: () => import('./pages/personalitytest/personalitytest.module').then( m => m.PersonalitytestPageModule)
  },
  {
    path: 'lovelanguagequiz',
    loadChildren: () => import('./pages/lovelanguagequiz/lovelanguagequiz.module').then( m => m.LovelanguagequizPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'chat',
    loadChildren: () => import('./pages/chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'update-onboarding',
    loadChildren: () => import('./pages/update-onboarding/update-onboarding.module').then( m => m.UpdateOnboardingPageModule)
  },  {
    path: 'notifications',
    loadChildren: () => import('./pages/notifications/notifications.module').then( m => m.NotificationsPageModule)
  },













];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
