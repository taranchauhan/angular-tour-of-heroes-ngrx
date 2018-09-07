import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Heroes, Dashboard, HeroDetail } from '@app/containers';

const routes: Routes = [
  { path: 'dashboard', component: Dashboard },
  { path: 'heroes', component: Heroes },
  { path: 'detail/:id', component: HeroDetail },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
