import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrentPageComponent } from '../current-page/current-page.component';

const routes: Routes = [
  {
    path: '',
    component: CurrentPageComponent
  },
  {
    path: ':item',
    component: CurrentPageComponent
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      // enableTracing: true
    }),
  ],
  exports: [RouterModule],
})
export class RoutingModule {}
