import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from 'src/app/pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    loadChildren: ()=> import('./../../pages/home/home.module').then(
      (m) => m.HomeModule
    ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
