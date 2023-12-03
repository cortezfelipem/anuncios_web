import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContainer } from './components/structural/main/main-container.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./components/structural/structural.module').then(
        (m) => m.StructuralModule
      ),
      component: MainContainer
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
