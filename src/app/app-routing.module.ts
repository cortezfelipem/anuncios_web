import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/feed', pathMatch: 'full' }, // Rota padrão redireciona para "feed"
  // { path: 'feed', component: FeedComponent }, // Rota para o componente "feed"
  // Você pode adicionar mais rotas aqui para outros componentes ou páginas da sua aplicação
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
